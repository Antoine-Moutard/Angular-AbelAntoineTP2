import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  hideEmail = false;

  constructor(private router: Router) {}

  toggleEmail(event: any) {
    this.hideEmail = event.target.checked;
  }

  onSubmit(form: any) {
    if (form.valid) {
      alert('Le formulaire est valide');
      localStorage.setItem('contactData', JSON.stringify(form.value));
      form.reset();

      // Redirect to /manage route
      this.router.navigate(['/home']);
    }
  }
}
