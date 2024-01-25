import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navlinks = [
    { id: 1, title: 'عن مهمة' },
    { id: 2, title: 'المميزات التنافسية' },
    { id: 3, title: 'ترقية الاشتراك' },
    { id: 4, title: 'فريق الدعم' },
  ];
}
