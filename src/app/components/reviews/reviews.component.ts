import { Component, OnInit } from '@angular/core';
import { Review } from '../../Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor() {}

  ngOnInit(): void {}
}
