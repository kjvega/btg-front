const FUND_MINIMUMS: { [key: string]: number } = {
  '1': 75000,
  '2': 125000,
  '3': 50000,
  '4': 250000,
  '5': 100000
};

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minimumAmountValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent;
    if (!formGroup) return null;

    const fundId = formGroup.get('fundId')?.value;
    const amount = control.value;

    if (!fundId || !amount) return null;

    const min = FUND_MINIMUMS[fundId];
    if (min && amount < min) {
      return { minimumAmount: { required: min, actual: amount } };
    }
    return null;
  };
}

