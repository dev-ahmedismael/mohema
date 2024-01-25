import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { CompanyService } from '../../../../../services/company.service';
import { first } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
@Injectable({ providedIn: 'root' })
export class TaskComponent implements OnInit {
  constructor(public dialog: MatDialog, private company: CompanyService) {}
  task: any;
  employees: any = [];
  goals: any = [];

  ngOnInit(): void {
    // Get Task
    const task_id = window?.localStorage?.getItem('task_id');
    this.company
      .getTask(task_id)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.task = res;
        },
      });

    // Get Task Team
    this.company
      .getTaskUser(task_id)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.employees = res;
        },
        error: (err) => {
          console.log(err);
        },
      });

    // Get Task Goals
    this.company
      .getTaskGoals(task_id)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.goals = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  openDialog(dialogType: string): void {
    const task_id = window?.localStorage?.getItem('task_id');

    if (dialogType === 'team') {
      this.company
        .getTaskUser(task_id)
        .pipe(first())
        .subscribe({
          next: (res) => {
            const dialogRef = this.dialog.open(TaskDialog, {
              data: { employees: res, type: 'team' },
            });
          },
        });
    } else {
      this.company
        .getTaskGoals(task_id)
        .pipe(first())
        .subscribe({
          next: (res) => {
            const dialogRef = this.dialog.open(TaskDialog, {
              data: { goals: res, type: 'goals' },
            });
          },
        });
    }
  }
}

@Component({
  selector: 'task-dialog',
  templateUrl: './task-dialog.html',
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
export class TaskDialog {
  constructor(
    public dialogRef: MatDialogRef<TaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private company: CompanyService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
