import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as EventEmitter from 'events';
import { Activity } from '../shared/model/activity';

@Component({
  selector: 'erm-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css'],
})
export class AddActivitiesComponent implements OnInit, OnChanges {
  register: FormGroup;
  actions: Array<string>;
  //date:Date;
  date: FormControl;
  @Input() activity: Activity;
  @Output() returnActivity = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.actions = [
      'Pular corda',
      'Estudar Angular',
      'Jogar vídeo game',
      'Jogar baralho',
      'Assistir Netflix',
    ];
    this.date = new FormControl(new Date());
    this.createForm(this.activity);
  }
  ngOnChanges() {
    //this.date = this.activity.date;
    this.date = new FormControl(new Date(this.activity.date));
    this.createForm(this.activity);
  }

  private createForm(act: Activity): void {
    this.register = this.fb.group({
      person: [
        act.person,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256),
        ],
      ],
      activity: [act.activity, [Validators.required]],
      date: [act.date, [Validators.required]],
      durationMinutes: [
        act.durationMinutes,
        [Validators.required, Validators.min(0), Validators.max(10000)],
      ],
    });
  }

  resetForm(): void {
    this.register.reset();
  }
  submit(): void {
    this.register.markAllAsTouched();
    if (this.register.invalid) {
      return;
    }

    const newActivity = this.register.getRawValue() as Activity;
    this.save(newActivity);
  }
  save(newActivity: Activity): void {
    //console.log(newActivity);
    this.returnActivity.emit(JSON.stringify(newActivity));
    // this.respostaFamilia.emit({
    //   person: 'Enzo',
    //   activity: 'Jogar vídeo game',
    //   date: '2020-10-8',
    //   durationMinutes: 600,
    // });
  }
}
