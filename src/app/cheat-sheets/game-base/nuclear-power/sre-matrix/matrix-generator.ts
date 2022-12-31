export type ValueOrArray<T> = T | Array<ValueOrArray<T>>;
type NumberArray = ValueOrArray<number>;

export function createSREMatrix(m: number, n?: number): number[][] {
  n = n || m;
  // initialize matrix
  const matrix: number[][] = [];
  for (let i = 0; i < m; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 1;
    }
  }

  // add neighbor bonuses
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // check for left neighbor
      if (j > 0) {
        matrix[i][j]++;
      }
      // check for top neighbor
      if (i > 0) {
        matrix[i][j]++;
      }
      // check for right neighbor
      if (j < n - 1) {
        matrix[i][j]++;
      }
      // check for bottom neighbor
      if (i < m - 1) {
        matrix[i][j]++;
      }
    }
  }

  return matrix;
}

export function sumMatrix(matrix: ValueOrArray<number> = 0): number {
  if (!Array.isArray(matrix)) {
    return matrix;
  }

  return matrix
    .map((v: ValueOrArray<number>): number =>
      Array.isArray(v) ? sumMatrix(v) : v
    )
    .reduce((total: number, row: number): number => total + row, 0);
}

export function buildSREFormula(
  matrix: ValueOrArray<number>,
  formula: string = ''
): string {
  if (!matrix) {
    return '';
  }

  if (Array.isArray(matrix)) {
    const counts: { [key: number]: number } = {};

    matrix.forEach((element, index) => {
      if (Array.isArray(element)) {
        formula = buildSREFormula(element, formula);
      } else {
        if (counts[element]) {
          counts[element]++;
        } else {
          counts[element] = 1;
        }
        if (index < matrix.length - 1 && !Array.isArray(matrix[index + 1])) {
          formula += ' + ';
        } else {
          formula += '\n';
        }
      }
    });

    for (const key in counts) {
      if (formula) {
        formula += ' + ';
      }
      formula += `${key}*${counts[key]}`;
    }
  } else {
    formula = `${matrix}`;
  }

  return formula;
}
