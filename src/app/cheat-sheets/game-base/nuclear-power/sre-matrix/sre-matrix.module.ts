import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SreMatrixComponent } from './sre-matrix.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SreMatrixComponent],
  exports: [SreMatrixComponent],
})
export class SreMatrixModule {}
