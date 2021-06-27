import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from '../../Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService
      .getReviews()
      .subscribe((reviews) => (this.reviews = reviews));
  }

  addReview(review: Review) {
    this.reviewService.addReview(review).subscribe((review) => {
      this.reviews.push(review);
    });
  }
}
