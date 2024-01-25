import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
})
export class ResourcesComponent {
  constructor(private router: Router) {}
  userRole = window?.localStorage?.getItem('role');
  navigateToCreateNewResource() {
    this.router.navigateByUrl(
      '/dashboard/project/resources/create-new-resource'
    );
  }
}
