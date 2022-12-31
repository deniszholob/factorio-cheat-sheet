import { ValueOrArray } from '../sre-matrix/matrix-generator';

type ValueCount = { value: number; count: number };

export function getMatrixValueSum(matrix: ValueOrArray<number>) {
  const values = mergeValueCounts(extractMatrixValues(matrix));
  const formula = values.map((row) => `${row.value}*${row.count}`).join(' + ');
  const sum = values
    .map((row) => row.value * row.count)
    .reduce((sum, row) => sum + row);
  return `${formula} = ${sum}`;
}

function extractMatrixValues(matrix: ValueOrArray<number>): ValueCount[] {
  if (!Array.isArray(matrix)) {
    return [{ value: matrix, count: 1 }];
  }

  return matrix.flatMap((element) =>
    Array.isArray(element)
      ? extractMatrixValues(element)
      : { value: element, count: 1 }
  );
}

function mergeValueCounts(valCounts: ValueCount[]): ValueCount[] {
  const mergedValCounts: ValueCount[] = [];
  valCounts.forEach((valCount) => {
    const existingValCount = mergedValCounts.find(
      (vc) => vc.value === valCount.value
    );
    if (existingValCount) {
      existingValCount.count += valCount.count;
    } else {
      mergedValCounts.push(valCount);
    }
  });
  return mergedValCounts;
}
