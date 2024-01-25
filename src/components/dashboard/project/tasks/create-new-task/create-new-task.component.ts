import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { CompanyService } from '../../../../../services/company.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-new-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './create-new-task.component.html',
  styleUrl: './create-new-task.component.scss',
})
export class CreateNewTaskComponent {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}

  taskForm: any = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    cost: ['', Validators.required],
    start_method: ['', Validators.required],
    on_complete_task: [null, Validators.required],
    start_date: ['', Validators.required],
    expiry_date: ['', Validators.required],
    end_method: ['', Validators.required],
  });

  get title() {
    return this.taskForm.controls['title'];
  }
  get description() {
    return this.taskForm.controls['description'];
  }
  get cost() {
    return this.taskForm.controls['cost'];
  }
  get start_method() {
    return this.taskForm.controls['start_method'];
  }
  get on_complete_task() {
    return this.taskForm.controls['on_complete_task'];
  }

  get start_date() {
    return this.taskForm.controls['start_date'];
  }
  get expiry_date() {
    return this.taskForm.controls['expiry_date'];
  }
  get end_method() {
    return this.taskForm.controls['end_method'];
  }

  tasks: any[] = [];

  createTask() {
    this.taskForm.markAllAsTouched();
    if (typeof window !== 'undefined') {
      let taskFormData = this.taskForm.value;
      taskFormData.project_id = localStorage.getItem('project_id');
      taskFormData.completness = 0;
      taskFormData.created_by = localStorage.getItem('username');
      let task_id: string | number;
      this.company
        .createTask(taskFormData)
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            this.addGoal(res.id);
          },
        });
    }
  }

  // Goals
  createGoalForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  goalsForm = this.fb.group({
    aliases: this.fb.array([this.createGoalForm()]),
  });

  get aliases() {
    return this.goalsForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.createGoalForm());
  }

  addGoal(task_id: string) {
    this.goalsForm.markAllAsTouched();
    if (this.goalsForm.value.aliases) {
      for (
        let index = 0;
        index < this.goalsForm.value.aliases.length;
        index++
      ) {
        this.company
          .addTaskGoal({
            task_id: task_id,
            title: this.goalsForm.value.aliases[index].title,
            description: this.goalsForm.value.aliases[index].description,
          })
          .pipe(first())
          .subscribe({
            next: () => {
              for (let document of this.documents) {
                const formData = new FormData();
                formData.append('task_document', document);
                formData.append('task_id', task_id);
                this.company
                  .storeTaskDocuments(formData)
                  .pipe(first())
                  .subscribe({
                    next: (res) => {
                      this.router.navigateByUrl('/dashboard/project/tasks');
                    },
                    error: (err) => {
                      console.log(err);
                    },
                  });
              }
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    }
  }

  // Documents

  documentsForm = this.fb.group({
    project_document: ['', Validators.required],
  });

  get project_document() {
    return this.documentsForm.controls['project_document'];
  }

  documents: any = [];
  recievedDocuments: any = [];

  uploadDocuments(event: any) {
    for (let index = 0; index < event.target.files.length; index++) {
      this.documents.push(event.target.files[index]);
    }
  }
}
