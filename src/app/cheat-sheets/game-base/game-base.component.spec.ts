import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameBaseComponent } from './game-base.component';
import { GameBaseModule } from './game-base.module';

describe('GameBaseComponent', () => {
  let component: GameBaseComponent;
  let fixture: ComponentFixture<GameBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GameBaseModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
