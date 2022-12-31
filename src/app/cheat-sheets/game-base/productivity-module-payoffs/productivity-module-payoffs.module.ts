import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TimePipe } from 'app/pipes';
import { FactorioIconModule } from 'app/shared';
import { CheatSheetModule } from 'app/shared/cheat-sheet/cheat-sheet.module';

import { ProductivityModulePayoffsComponent } from './productivity-module-payoffs.component';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    NgbPaginationModule,

    CheatSheetModule,
    FactorioIconModule,
  ],
  declarations: [ProductivityModulePayoffsComponent, TimePipe],
  exports: [ProductivityModulePayoffsComponent],
})
export class ProductivityModulePayoffsModule {}
