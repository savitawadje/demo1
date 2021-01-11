import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './event-form/event-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared,module';



@NgModule({
  declarations: [EventsComponent, EventFormComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,SharedModule
  ],

  exports: 
  [
    
  ]

})
export class EventModule { }
