import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../shared/model/activity';

@Component({
  selector: 'erm-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css'],
})
export class AddActivitiesComponent implements OnInit {
  register: FormGroup;
  action: Array<string>;
  @Input() activity: Activity;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.action = [
      'Pular corda',
      'Estudar Angular',
      'Jogar vídeo game',
      'Jogar baralho',
      'Assistir Netflix',
    ];
  }

  private criarFormulario(act: Activity): void {
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
}
