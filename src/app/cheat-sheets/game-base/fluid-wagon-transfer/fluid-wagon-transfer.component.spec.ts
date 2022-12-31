import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FluidWagonTransferComponent } from './fluid-wagon-transfer.component';
import { FluidWagonTransferModule } from './fluid-wagon-transfer.module';

describe('FluidWagonTransferComponent', () => {
  let component: FluidWagonTransferComponent;
  let fixture: ComponentFixture<FluidWagonTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FluidWagonTransferModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidWagonTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
