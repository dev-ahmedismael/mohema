import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegisterationComponent } from './complete-registeration.component';

describe('CompleteRegisterationComponent', () => {
  let component: CompleteRegisterationComponent;
  let fixture: ComponentFixture<CompleteRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteRegisterationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
