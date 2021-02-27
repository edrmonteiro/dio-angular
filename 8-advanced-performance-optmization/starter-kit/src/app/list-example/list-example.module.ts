import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { ExampleServiceService } from './example-service.service';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule],
  providers: [ExampleServiceService],
})
export class ListExampleModule {}
