import { Directive, Input, ViewContainerRef , TemplateRef, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[ermIf]'
})
export class ErmIfDirective {

    private embedded: EmbeddedViewRef<any>;

  constructor(private vcRef: ViewContainerRef,
    private template: TemplateRef<any>){

    }

//@Input() set flag(value: boolean) //<ng-template ermIf [flag]="true">
@Input('ermIf') set flag(value: boolean) { //<ng-template [ermIf]="true">
  if(value){
    //this.vcRef.createEmbeddedView(this.template);
    this.embedded = this.vcRef.createEmbeddedView(this.template);
  } else if (!this.embedded){
    this.embedded.destroy();
  }
}

}
