import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SreMatrixModule } from '../sre-matrix/sre-matrix.module';
import { SreDiagramComponent } from './sre-diagram.component';

@NgModule({
  imports: [CommonModule, SreMatrixModule],
  declarations: [SreDiagramComponent],
  exports: [SreDiagramComponent],
})
export class SreDiagramModule {}
