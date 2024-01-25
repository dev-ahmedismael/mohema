import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstAttachmentsComponent } from './create-first-attachments.component';

describe('CreateFirstAttachmentsComponent', () => {
  let component: CreateFirstAttachmentsComponent;
  let fixture: ComponentFixture<CreateFirstAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFirstAttachmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFirstAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
