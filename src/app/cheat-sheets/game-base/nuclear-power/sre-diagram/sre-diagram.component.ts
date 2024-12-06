import { Component, Input } from '@angular/core';

import { createSREMatrix, sumMatrix } from '../sre-matrix/matrix-generator';
import { getMatrixValueSum } from './sre-formula';

@Component({
  selector: 'app-sre-diagram',
  templateUrl: './sre-diagram.component.html',
})
export class SreDiagramComponent {
  private _row: number = 1;

  @Input()
  public set row(row: number) {
    this._row = row > 0 ? row : 1;
    this.updateMatrixData();
  }
  public get row(): number {
    return this._row;
  }

  private _column: number = 1;
  @Input()
  public set column(column: number) {
    this._column = column > 0 ? column : 1;
    this.updateMatrixData();
  }
  public get column(): number {
    return this._column;
  }

  public matrix: number[][] = [];
  public reactorCount: number = 0;
  public sre: number = 0;
  public sreFormula: string = '';

  @Input()
  public reactorPower = 40; //MW

  constructor() {
    this.updateMatrixData();
  }

  private updateMatrixData(): void {
    this.matrix = createSREMatrix(this.row, this.column);
    this.reactorCount = this.calculateReactors();
    this.sre = this.calculateSRE();
    this.sreFormula = this.calculateSREFormula();
  }

  private calculateSRE(): number {
    return sumMatrix(this.matrix);
  }

  private calculateReactors(): number {
    return this.row * this.column;
  }

  private calculateSREFormula(): string {
    return getMatrixValueSum(this.matrix);
  }
}
