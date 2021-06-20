import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  private apiURL = 'http://localhost:5000/reviews';

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiURL);
  }
}
