import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCompanyGoalsComponent } from './set-company-goals.component';

describe('SetCompanyGoalsComponent', () => {
  let component: SetCompanyGoalsComponent;
  let fixture: ComponentFixture<SetCompanyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCompanyGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetCompanyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
