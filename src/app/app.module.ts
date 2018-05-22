import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
 
import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent
  ],   
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
