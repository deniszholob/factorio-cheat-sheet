import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { BlueprintClipboardComponent } from './blueprint-clipboard.component';

@NgModule({
  imports: [CommonModule, NgbTooltipModule, HttpClientModule],
  declarations: [BlueprintClipboardComponent],
  exports: [BlueprintClipboardComponent],
})
export class BlueprintClipboardModule {}
