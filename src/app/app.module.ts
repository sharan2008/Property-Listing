import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
 
import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyItemComponent } from './property-item/property-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    PropertyItemComponent
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
