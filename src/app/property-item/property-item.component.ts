import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
    @Input('property')  property: any;
  constructor() { }

  ngOnInit() {
  }

}
