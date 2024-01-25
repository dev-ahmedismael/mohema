import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CompanyService } from '../../../../services/company.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {
  constructor(public dialog: MatDialog, private company: CompanyService) {}
  tabs = [
    {
      id: 1,
      title: 'الطلبات الواردة',
      path: '/dashboard/project/requests/inbound-requests',
    },
    {
      id: 2,
      title: 'الطلبات الصادرة',
      path: '/dashboard/project/requests/outbound-requests',
    },
    {
      id: 3,
      title: 'جميع الطلبات',
      path: '/dashboard/project/requests/all-requests',
    },
  ];

  openDialog(): void {
    if (typeof window !== 'undefined') {
      const project_id = window.localStorage.getItem('project_id');
      this.company
        .getProjectUser(project_id)
        .pipe(first())
        .subscribe({
          next: (res) => {
            const projectTeam = res;
            const dialogRef = this.dialog.open(RequestDialog, {
              data: { projectTeam: projectTeam },
            });
          },
        });
    }
  }
}

@Component({
  selector: 'task-dialog',
  templateUrl: './requests-dialog.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class RequestDialog {
  constructor(
    public dialogRef: MatDialogRef<RequestDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private company: CompanyService,
    private fb: FormBuilder
  ) {}

  requestForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    to: ['', Validators.required],
  });

  get title() {
    return this.requestForm.controls['title'];
  }
  get description() {
    return this.requestForm.controls['description'];
  }
  get to() {
    return this.requestForm.controls['to'];
  }

  onSubmit() {
    this.requestForm.markAllAsTouched();
    const formData: any = this.requestForm.value;
    const senderID = window?.localStorage?.getItem('id');
    const senderUsername = window?.localStorage?.getItem('username');
    const member = this.data.projectTeam.find((member: any) => {
      return member.username === formData.to;
    });
    formData.to = member.username;
    formData.to_id = member.id;
    formData.from = senderUsername;
    formData.from_id = senderID;
    formData.project_id = window?.localStorage?.getItem('project_id');

    this.company
      .sendRequest(formData)
      .pipe(first())
      .subscribe({
        next: (res) => {
          console.log(res);

          this.onNoClick();
        },
        error: (err) => {
          console.log(err);
        },
      });
    console.log('clicked');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
