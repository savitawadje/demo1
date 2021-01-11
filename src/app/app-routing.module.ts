import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { ContactComponent } from './features/contact/contact.component';

import {EventsComponent} from './features/event/events/events.component';
import { ProductsComponent } from './features/product/products/products.component';
import { EventFormComponent } from './features/event/event-form/event-form.component';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [

  {
    path: '' ,
    component: HomeComponent
  },


  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'about',
    component: AboutusComponent
  },


  {
    path: 'contactus',
    component: ContactComponent
  },


  {
    path: 'event',
    component: EventsComponent
  },


  {
    path: 'product',
    component: ProductsComponent
  },

  {
    path: 'eventform',
    component: EventFormComponent
  },

  {
    path: 'productform',
    component: ProductFormComponent
  }
  
  
  


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
