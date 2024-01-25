import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstProjectComponent } from './create-first-project.component';

describe('CreateFirstProjectComponent', () => {
  let component: CreateFirstProjectComponent;
  let fixture: ComponentFixture<CreateFirstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFirstProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
