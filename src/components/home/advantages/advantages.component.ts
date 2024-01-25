import { NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvantagesComponent {
  items = [
    {
      id: 1,
      title: 'مهامك تحت سيطرتك استمتع بتجربة تحكم فائقة في المشاريع',
      imagePath: 'assets/images/advantages/1.png',
    },
    {
      id: 2,
      title:
        'سهولة الاستخدام والتنظيم الفعّال مما يجعل إدارة المشاريع مهمة ممتعة',
      imagePath: 'assets/images/advantages/2.png',
    },
    {
      id: 3,
      title: 'يمكنك تحديد المهام ومتابعة تقدم العمل بشكل مريح ومبسط',
      imagePath: 'assets/images/advantages/3.png',
    },
    {
      id: 4,
      title: 'تنظيم المهام بسهولة وفعالية',
      imagePath: 'assets/images/advantages/4.png',
    },
    {
      id: 5,
      title: 'مهامك تحت سيطرتك استمتع بتجربة تحكم فائقة في المشاريع',
      imagePath: 'assets/images/advantages/1.png',
    },
    {
      id: 6,
      title:
        'سهولة الاستخدام والتنظيم الفعّال مما يجعل إدارة المشاريع مهمة ممتعة',
      imagePath: 'assets/images/advantages/2.png',
    },
    {
      id: 7,
      title: 'يمكنك تحديد المهام ومتابعة تقدم العمل بشكل مريح ومبسط',
      imagePath: 'assets/images/advantages/3.png',
    },
    {
      id: 8,
      title: 'تنظيم المهام بسهولة وفعالية',
      imagePath: 'assets/images/advantages/4.png',
    },
  ];
}
