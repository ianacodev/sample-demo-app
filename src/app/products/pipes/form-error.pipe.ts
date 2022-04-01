import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
// models
import { ValidatorTypes } from '../models';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  errorMessageLookup = {
    [ValidatorTypes.Required]: () => 'This is a required field',
    [ValidatorTypes.Minlength]: (error: any) =>
      `Min length ${error.requiredLength}`,
    [ValidatorTypes.Maxlength]: (error: any) =>
      `Max length ${error.requiredLength}`,
    [ValidatorTypes.MaxDetails]: (error: any) =>
      `Max ${error.requiredLength} details`,
  };

  transform(errors: ValidationErrors, ...args: unknown[]): unknown {
    const errorKey = Object.keys(errors)[0] as ValidatorTypes;
    const error = errors[errorKey];
    const messageFn = this.errorMessageLookup[errorKey];
    return messageFn(error);
  }
}
