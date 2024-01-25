import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navlinks = [
    { id: 1, title: 'عن مهمة' },
    { id: 2, title: 'المميزات التنافسية' },
    { id: 3, title: 'ترقية الاشتراك' },
    { id: 4, title: 'فريق الدعم' },
  ];

  quicklinks = [
    { id: 1, title: 'الشروط والأحكام' },
    { id: 2, title: 'سياسة الخصوصية' },
  ];

  socialMediaItems = [
    {
      id: 1,
      title: 'Facebook',
      iconPath: 'assets/images/social_media/facebook.png',
      url: 'https://www.facebook.com',
    },
    {
      id: 2,
      title: 'X',
      iconPath: 'assets/images/social_media/x.png',
      url: 'https://www.twitter.com',
    },
    {
      id: 3,
      title: 'LinkedIn',
      iconPath: 'assets/images/social_media/linkedin.png',
      url: 'https://www.linkedin.com',
    },
    {
      id: 4,
      title: 'YouTube',
      iconPath: 'assets/images/social_media/youtube.png',
      url: 'https://www.youtube.com',
    },
  ];
}
