import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CheatSheetComponent, FactorioIconModule } from 'app/shared';
import { AdSenseModule } from '../ad-sense/ad-sense.module';

@NgModule({
  imports: [
    CommonModule,
    FactorioIconModule,
    AdSenseModule,
    NgbCollapseModule,
    RouterModule,
  ],
  declarations: [CheatSheetComponent],
  exports: [CheatSheetComponent],
})
export class CheatSheetModule {}
