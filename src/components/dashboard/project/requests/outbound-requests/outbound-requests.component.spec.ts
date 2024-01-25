import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundRequestsComponent } from './outbound-requests.component';

describe('OutboundRequestsComponent', () => {
  let component: OutboundRequestsComponent;
  let fixture: ComponentFixture<OutboundRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutboundRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutboundRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
