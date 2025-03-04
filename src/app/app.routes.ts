import { Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: QuestionListComponent }, // Home page
  { path: 'question/:id', component: QuestionDetailComponent }, // Question details
  { path: 'favorites', component: FavoritesComponent } // Favorites
];

