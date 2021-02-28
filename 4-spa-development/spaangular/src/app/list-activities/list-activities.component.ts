import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Activity } from '../shared/model/activity';

interface ActivityNew {
  new: boolean;
  activity: Activity;
}
@Component({
  selector: 'erm-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css'],
})
export class ListActivitiesComponent implements OnInit, OnChanges {
  listActivities: Activity[] = [];
  sendActivity: Activity = this.emptyActivity();
  receivedActivity: Activity;
  displayedColumns: string[] = [
    'Person',
    'Activity',
    'Date',
    'Duration in minutes',
    '-',
  ];

  constructor() {}

  emptyActivity(): Activity {
    let newActivity = {
      person: '',
      activity: '',
      date: '',
      durationMinutes: 0,
    };
    return newActivity;
  }
  ngOnChanges(): void {
    console.log('onchange list');
  }

  ngOnInit(): void {
    this.listActivities = [
      {
        person: 'Camila',
        activity: 'Pular corda',
        date: '2020-04-8',
        durationMinutes: 70,
      },
      {
        person: 'Eduardo',
        activity: 'Estudar Angular',
        date: '2020-10-8',
        durationMinutes: 60,
      },
      {
        person: 'Enzo',
        activity: 'Jogar vídeo game',
        date: '2020-10-8',
        durationMinutes: 600,
      },
      {
        person: 'Lara',
        activity: 'Jogar vídeo game',
        date: '2020-6-12',
        durationMinutes: 500,
      },
    ];
  }
  edit(element: Activity): void {
    this.sendActivity = element;
  }
  addItem(event: string) {
    const activityNew = JSON.parse(event) as ActivityNew;
    if (activityNew.new) {
      this.listActivities = [...this.listActivities, activityNew.activity];
    } else {
      this.sendActivity.person = activityNew.activity.person;
      this.sendActivity.activity = activityNew.activity.activity;
      this.sendActivity.date = activityNew.activity.date;
      this.sendActivity.durationMinutes = activityNew.activity.durationMinutes;
    }
  }
}
