import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventModule}from './features/event/event.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './features/contact/contact.component';
import {  AboutusComponent } from './features/aboutus/aboutus.component';
import { ClientsComponent } from './features/home/clients/clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared,module';
import { HttpClientModule } from '@angular/common/http';
import { HomeprodComponent } from './features/home/homeprod/homeprod.component';
import { NewcompComponent } from './features/home/newcomp/newcomp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutusComponent,
    ClientsComponent,
    HomeprodComponent,
    NewcompComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  
 }
