import { FormErrorPipe } from './form-error.pipe';
// models
import { ValidatorTypes } from './../models/products.model';

describe('FormErrorPipe', () => {
  const pipe = new FormErrorPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should provide single error message on multiple errors', () => {
    const mockErrors = {
      [ValidatorTypes.Required]: true,
      [ValidatorTypes.Maxlength]: { requiredLength: 4 },
    };
    expect(pipe.transform(mockErrors)).toBe('This is a required field');
  });
});
