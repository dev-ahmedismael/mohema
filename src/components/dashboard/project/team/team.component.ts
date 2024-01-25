import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CompanyService } from '../../../../services/company.service';
import { first } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  constructor(public dialog: MatDialog, private company: CompanyService) {}

  openDialog(dialogType: string, user_id: string): void {
    if (dialogType === 'add-member') {
      if (typeof window !== 'undefined') {
        let company_id = localStorage.getItem('company_id');
        this.company.getCompanyUsers(company_id).subscribe({
          next: (res) => {
            const dialogRef = this.dialog.open(UsersDialog, {
              data: { employees: res, type: 'add-member' },
            });
          },
        });
      }
    } else {
      if (typeof window !== 'undefined') {
        const task_id = localStorage.getItem('task_id');
        const project_id = localStorage.getItem('project_id');
        this.company
          .getTasks(project_id)
          .pipe(first())
          .subscribe({
            next: (res) => {
              const dialogRef = this.dialog.open(UsersDialog, {
                data: { tasks: res, type: 'add-task', user_id: user_id },
              });
            },
          });
      }
    }
  }

  parseDate(date: any) {
    return date.slice(0, 10);
  }

  employees: any;
  ngOnInit(): void {
    let project_id = window?.localStorage.getItem('project_id');
    this.employees = this.company.getProjectUser(project_id).subscribe({
      next: (res) => {
        this.employees = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

@Component({
  selector: 'users-dialog',
  templateUrl: './users-dialog.html',
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
export class UsersDialog {
  constructor(
    public dialogRef: MatDialogRef<UsersDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private company: CompanyService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Search Employee Form
  searchEmployeeForm = this.fb.group({
    employee: ['', Validators.required],
  });

  get employee() {
    return this.searchEmployeeForm.controls['employee'];
  }

  addEmployee() {
    const employeeUsername = this.searchEmployeeForm.controls.employee.value;
    const employee = this.data.employees.find((employee: any) => {
      return employee.username == employeeUsername;
    });
    const data = {
      user_id: employee.id,
      project_id: window?.localStorage?.getItem('project_id'),
    };
    this.company
      .storeProjectUser(data, data.project_id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.searchEmployeeForm.reset();
        },
      });
  }

  // Search Task Form
  searchTaskForm = this.fb.group({
    task: '',
  });

  get task() {
    return this.searchTaskForm.controls['task'];
  }

  addTask(user_id: any) {
    const task_title = this.searchTaskForm.controls.task.value;
    const task = this.data.tasks.find((task: any) => {
      return task.title == task_title;
    });
    const data = {
      user_id: user_id,
      task_id: window?.localStorage?.getItem('task_id'),
    };
    this.company
      .storeTaskUser(data, data.task_id)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.searchTaskForm.reset();
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
