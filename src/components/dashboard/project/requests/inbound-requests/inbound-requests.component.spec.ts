import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundRequestsComponent } from './inbound-requests.component';

describe('InboundRequestsComponent', () => {
  let component: InboundRequestsComponent;
  let fixture: ComponentFixture<InboundRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboundRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboundRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
