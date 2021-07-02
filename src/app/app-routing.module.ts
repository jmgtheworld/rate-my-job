import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
  { path: '', component: ReviewsComponent },
  {
    path: 'item',
    component: ReviewItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
