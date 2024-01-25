import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  items = [
    { id: 1, title: 'بيانات التسجيل', path: 'login-information' },
    { id: 2, title: 'البيانات الشخصية', path: 'personal-information' },
    { id: 3, title: 'بيانات الشركة', path: 'company-details' },
    { id: 4, title: 'إضافة فريق العمل', path: 'create-first-teamwork' },
    { id: 5, title: 'تحديد أهداف الشركة', path: 'set-company-goals' },
    { id: 6, title: 'إنشاء أول مشروع', path: 'create-first-project' },
    { id: 7, title: 'إضافة المرفقات', path: 'create-first-attachments' },
    { id: 8, title: 'أهداف المشروع', path: 'set-project-goals' },
  ];
}
