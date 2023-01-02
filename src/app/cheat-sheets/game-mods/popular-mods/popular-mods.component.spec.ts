import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopularModsComponent } from './popular-mods.component';
import { PopularModsModule } from './popular-mods.module';

describe('UtilityModsComponent', () => {
  let component: PopularModsComponent;
  let fixture: ComponentFixture<PopularModsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PopularModsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
