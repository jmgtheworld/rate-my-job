import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Review';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  private apiURL = 'http://localhost:5000/reviews';

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiURL);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiURL, review, httpOptions);
  }
}
