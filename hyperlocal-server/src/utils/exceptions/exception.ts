import { Exceptions } from './exceptionHandler';

export class Exception {
  constructor(readonly exception: Exceptions, readonly message?: string) {}
}