import { Component, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent implements DoCheck {
export class AppComponent {
  //value = this._value;
  value = 1;

  //tira o erro
  // ngDoCheck() {
  //   this.value = this._value;
  // }

  //atualiza a cada 1 mili-segundo
  // constructor(){
  //   setInterval(() => this.value = this._value, 1)
  // }
  constructor(private ngZone:NgZone){
    ngZone.runOutsideAngular( ()=>
    setInterval(() => this.value = this._value, 1))
  }
  private get _value(): number {
    return Math.floor(Math.random() * 10);
  }
}
