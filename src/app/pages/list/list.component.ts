import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  films = [
    { title: 'Indiana Jones', poster: 'assets/indiana-jones.jpg'},
    { title: 'Transformers', poster: 'assets/transformers.jpg' },
    { title: 'Fight Club', poster: 'assets/fight-club.jpg' },
    { title: 'Interstellar', poster: 'assets/interstellar.jpg' },
    { title: 'Whiplash', poster: 'assets/whiplash.jpg' },
  ];

  selectedFilm: any;

  showDetails(film: any) {
    this.selectedFilm = film;
  }
}

