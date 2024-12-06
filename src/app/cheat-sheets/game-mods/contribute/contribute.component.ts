import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheatSheetTemplateComponent } from 'app/shared/cheat-sheet-template/cheat-sheet-template.component';

import { Links, MOD_REQUESTS } from './contribute.data';

export const CONTRIBUTE_SHEET_ICON = 'Steam_engine';
export const CONTRIBUTE_SHEET_TITLE = 'Steam Power';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  standalone: true,
  imports: [CommonModule, CheatSheetTemplateComponent],
})
export class ContributeComponent {
  protected readonly cheatSheetIconId: string = CONTRIBUTE_SHEET_ICON;
  protected readonly cheatSheetTitle: string = CONTRIBUTE_SHEET_TITLE;

  public readonly MOD_REQUESTS: Links[] = MOD_REQUESTS;
}
