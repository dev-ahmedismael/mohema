import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectGoalsComponent } from './create-project-goals.component';

describe('CreateProjectGoalsComponent', () => {
  let component: CreateProjectGoalsComponent;
  let fixture: ComponentFixture<CreateProjectGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProjectGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
