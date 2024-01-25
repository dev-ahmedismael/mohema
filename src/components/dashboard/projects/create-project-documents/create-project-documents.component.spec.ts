import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectDocumentsComponent } from './create-project-documents.component';

describe('CreateProjectDocumentsComponent', () => {
  let component: CreateProjectDocumentsComponent;
  let fixture: ComponentFixture<CreateProjectDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectDocumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProjectDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
