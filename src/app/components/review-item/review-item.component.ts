import { Component, OnInit, Input, Output } from '@angular/core';
import { Review } from '../../Review';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
})
export class ReviewItemComponent implements OnInit {
  @Input() review: Review;

  constructor() {}

  ngOnInit(): void {}

  viewItem() {
    console.log('clicked');
  }
}
