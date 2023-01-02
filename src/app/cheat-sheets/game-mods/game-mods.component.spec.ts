import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameModsComponent } from './game-mods.component';
import { GameModsModule } from './game-mods.module';

describe('GameModsComponent', () => {
  let component: GameModsComponent;
  let fixture: ComponentFixture<GameModsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GameModsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
