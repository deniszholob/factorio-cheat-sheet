import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sre-matrix',
  templateUrl: './sre-matrix.component.html',
})
export class SreMatrixComponent {
  @Input()
  public matrix: number[][] = [];
}
