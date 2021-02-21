import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ermFor]'
})
export class ErmForDirective implements OnInit {
  @Input('ermForFrom') list: string[];


  constructor(private template: TemplateRef<any>,
              private vcRef: ViewContainerRef,) { }

  ngOnInit(){
    this.list.forEach( (item, index) => {
      this.vcRef.createEmbeddedView(this.template, {
        $implicit: item,
        index,
      });
    });
  }

}
