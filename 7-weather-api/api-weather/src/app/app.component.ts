import { Component } from '@angular/core';
import * as moment from 'moment';
//import 'moment/locale/pt-br';

@Component({
  selector: 'erm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    //moment.locale('pt-br');
  }
}
