import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstTeamworkComponent } from './create-first-teamwork.component';

describe('CreateFirstTeamworkComponent', () => {
  let component: CreateFirstTeamworkComponent;
  let fixture: ComponentFixture<CreateFirstTeamworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFirstTeamworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFirstTeamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
