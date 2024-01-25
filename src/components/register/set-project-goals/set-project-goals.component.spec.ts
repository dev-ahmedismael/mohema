import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProjectGoalsComponent } from './set-project-goals.component';

describe('SetProjectGoalsComponent', () => {
  let component: SetProjectGoalsComponent;
  let fixture: ComponentFixture<SetProjectGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetProjectGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetProjectGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
