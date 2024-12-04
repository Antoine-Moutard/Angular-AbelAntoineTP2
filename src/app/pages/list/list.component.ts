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
    { title: 'Film 1', poster: 'https://www.nanarland.com/media/cache/resolve/front_film_single_cover/uploads/films/5e8b565c69467-sharknado-jaquette.jpg' },
    { title: 'Film 2', poster: 'https://www.nanarland.com/media/cache/resolve/front_film_single_cover/uploads/films/5e8b565c69467-sharknado-jaquette.jpg' },
    { title: 'Film 3', poster: 'https://www.nanarland.com/media/cache/resolve/front_film_single_cover/uploads/films/5e8b565c69467-sharknado-jaquette.jpg' },
    { title: 'Film 4', poster: 'https://www.nanarland.com/media/cache/resolve/front_film_single_cover/uploads/films/5e8b565c69467-sharknado-jaquette.jpg' },
    { title: 'Film 5', poster: 'https://www.nanarland.com/media/cache/resolve/front_film_single_cover/uploads/films/5e8b565c69467-sharknado-jaquette.jpg' },
  ];

  selectedFilm: any;

  showDetails(film: any) {
    this.selectedFilm = film;
  }
}

