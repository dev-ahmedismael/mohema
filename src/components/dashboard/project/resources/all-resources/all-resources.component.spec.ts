import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResourcesComponent } from './all-resources.component';

describe('AllResourcesComponent', () => {
  let component: AllResourcesComponent;
  let fixture: ComponentFixture<AllResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
