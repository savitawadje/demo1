import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './event.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[EventService,ProductService],
  exports:[]
})
export class ServiceModule { }
