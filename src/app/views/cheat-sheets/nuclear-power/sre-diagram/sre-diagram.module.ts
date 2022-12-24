import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SreDiagramComponent } from './sre-diagram.component';
import { SreMatrixModule } from '../sre-matrix/sre-matrix.module';

@NgModule({
  imports: [CommonModule, SreMatrixModule],
  declarations: [SreDiagramComponent],
  exports: [SreDiagramComponent],
})
export class SreDiagramModule {}
