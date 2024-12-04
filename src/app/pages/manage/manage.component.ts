import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  contactData: any;

  ngOnInit() {
    const data = localStorage.getItem('contactData');
    this.contactData = data ? JSON.parse(data) : null;
  }
}
