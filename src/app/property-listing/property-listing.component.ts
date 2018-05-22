import { Component, OnInit } from '@angular/core';
import {properties} from './../data/properties';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {
properties:Array<any> = properties;
  constructor() { }

  ngOnInit() {
  }

}
