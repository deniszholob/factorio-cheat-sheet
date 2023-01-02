import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'app/services';
import { AdSenseModule } from '../ad-sense/ad-sense.module';
import { FactorioIconModule } from '../factorio-icon/factorio-icon.module';
import { CheatSheetTemplateComponent } from './cheat-sheet-template.component';

@NgModule({
  imports: [
    CommonModule,
    FactorioIconModule,
    AdSenseModule,
    NgbCollapseModule,
    RouterModule,
  ],
  declarations: [CheatSheetTemplateComponent],
  exports: [CheatSheetTemplateComponent],
  providers: [DataService],
})
export class CheatSheetTemplateModule {}
