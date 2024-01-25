import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../../../../services/company.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project-documents',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './create-project-documents.component.html',
  styleUrl: './create-project-documents.component.scss',
})
export class CreateProjectDocumentsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private company: CompanyService,
    private router: Router
  ) {}

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
    if (typeof window !== 'undefined') {
      let project_id: any = localStorage.getItem('project_id');
      for (let document of this.documents) {
        const formData = new FormData();
        formData.append('project_document', document);
        formData.append('project_id', project_id);
        this.company.storeProjectDocuments(formData).subscribe({
          next: (res) => console.log(res),
        });
      }
    }
  }
  addDocuments() {
    this.router.navigateByUrl('/dashboard/create-project-goals');
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let project_id: any = localStorage.getItem('project_id');
      this.company.getProjectDocuments(project_id).subscribe({
        next: (res) => {
          this.recievedDocuments = res;
        },
      });
    }
  }
}
