import { Directive, DoCheck, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ermSwitch]'
})
export class ErmSwitchDirective {
  @Input('ermSwitch') switchState: any;
  constructor() { }
}

@Directive({
  selector: '[ermSwitchCase]'
})
export class ErmSwitchCaseDirective implements DoCheck {
  @Input('ermSwitchCase') caseValue: any;
  constructor(private template: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    @Host() private ermSwitch:ErmSwitchDirective
    ) { }
  ngDoCheck() {
    if (this.ermSwitch.switchState === this.caseValue) {
      this.vcRef.createEmbeddedView(this.template);
    }else{
      this.vcRef.clear();
    }
  }
}
