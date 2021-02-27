import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/model/activity';

@Component({
  selector: 'erm-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css'],
})
export class ListActivitiesComponent implements OnInit {
  listActivities: Activity[] = [];
  displayedColumns: string[] = [
    'Person',
    'Activity',
    'Date',
    'Duration in minutes',
  ];

  constructor() {}

  ngOnInit(): void {
    this.listActivities = [
      {
        person: 'Eduardo',
        activity: 'Estudar Angular',
        date: '2020-10-8',
        durationMinutes: 60,
      },
      {
        person: 'Enzo',
        activity: 'Jogar Vídeo Game',
        date: '2020-10-8',
        durationMinutes: 600,
      },
    ];
  }
}
