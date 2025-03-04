import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: any[] = [];

  addToFavorites(question: any) {
    if (!this.favorites.some(q => q.id === question.id)) {
      this.favorites.push(question);
    }
  }
}