import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from '../../Review';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss'],
})
export class NewReviewComponent implements OnInit {
  @Output() onAddReview: EventEmitter<Review> = new EventEmitter();

  company: string;
  title: string;
  text: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.company) {
      alert('please add company name');
      return;
    }
    if (!this.title) {
      alert('please add company name');
      return;
    }

    const newReview = {
      company: this.company,
      title: this.title,
      text: this.text,
    };

    this.onAddReview.emit(newReview);

    this.company = '';
    this.title = '';
    this.text = '';
  }
}
