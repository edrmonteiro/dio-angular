import { Component, OnInit } from '@angular/core';

import { UserContextService } from 'src/app/shared/services/user-context.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'jv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private userContext: UserContextService) {
  }
  ngOnInit() {
    this.user = this.userContext.user;

  }
}
