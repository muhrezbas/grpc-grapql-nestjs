import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsTimeString', async: false })
export class IsTimeStringConstraint implements ValidatorConstraintInterface {
  public validate(value: string): boolean {
    const pattern = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/;
    return pattern.test(value);
  }

  public defaultMessage(): string {
    // Set the default error message here
    return `$property provide time like 07:20:00 and makesure its valid time`;
  }
}

export function IsTimeString(validationOptions?: ValidationOptions) {
  return (object: unknown, propertyName: string): void => {
    registerDecorator({
      name: 'IsTimeString',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsTimeStringConstraint,
    });
  };
}
