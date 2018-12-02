import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public images = [
    { src: 'assets/images/temp1.jpg', title: 'Bike 1' },
    { src: 'assets/images/temp2.jpg', title: 'Row 1' },
    { src: 'assets/images/temp3.jpg', title: 'Row 2' }
  ];
  @ViewChild('imgCarousel') imgCarousel: any;

  constructor() { }

  ngOnInit() {
  }

  beforeChange($event) {
    console.log('before tab change', $event);
    if ($event.nextId === 'tabImages') {
      // $event.preventDefault();
    }
  }

  prev() {
    this.imgCarousel.prev();
  }

  next() {
    this.imgCarousel.next();
  }

}
