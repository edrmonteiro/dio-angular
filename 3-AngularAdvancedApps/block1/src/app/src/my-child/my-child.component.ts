import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {
  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }
}
