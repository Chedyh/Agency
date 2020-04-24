import {Component, Input, OnInit} from '@angular/core';
import {Testimonial} from "../../_shared/_models/testimonial.model";

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {
  @Input() testimonial: Testimonial;

  constructor() { }

  ngOnInit() {}

}
