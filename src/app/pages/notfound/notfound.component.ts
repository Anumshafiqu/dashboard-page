import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-notfound',
  imports: [CardModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
  standalone : true,
})
export class NotfoundComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/home']);
  }
}
