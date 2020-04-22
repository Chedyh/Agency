import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickBlog = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  blogClicked() {
    this.clickBlog.emit('blog clicked');
  }
}
