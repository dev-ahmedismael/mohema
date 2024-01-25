import { NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartnersComponent {
  partners = [
    'assets/images/partners/1.png',
    'assets/images/partners/2.png',
    'assets/images/partners/3.png',
    'assets/images/partners/4.png',
    'assets/images/partners/1.png',
    'assets/images/partners/2.png',
    'assets/images/partners/3.png',
    'assets/images/partners/4.png',
  ];
}
