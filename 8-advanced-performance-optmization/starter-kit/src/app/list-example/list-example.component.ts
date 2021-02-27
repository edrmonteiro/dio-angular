import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  items = new Array(45);
  users: any = [];

  constructor(private exampleService: ExampleServiceService) {}

  ngOnInit(): void {
    this.exampleService.getUsers().subscribe((users) => {
      //console.log(users);
      this.users = users;
    });
  }
}
