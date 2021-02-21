import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  @ViewChild('template', {static: false}) template: TemplateRef<any>; //ou ElementRef
  @ViewChild('container', {static: false, read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private vcRef:ViewContainerRef) {

  }
  ngAfterViewInit(){
    //this.vcRef.createEmbeddedView(this.template);
  }

  flag: boolean;
  list = ['A', 'B', 'C'];
  value: 'A' | 'B' = 'A';


  onClick() {
    //synthetic sugar
    //this.vcRef.createEmbeddedView(this.template); //add at the and of the view
    this.container.createEmbeddedView(this.template); //add at container
    this.flag = !this.flag;

  }
  toggle() {
    if (this.value === 'A'){
      this.value = 'B'
    }else{
      this.value = 'A'
    }
  }

}
