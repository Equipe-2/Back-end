import { Exceptions } from './exceptionHandler';

export interface Exception {
  message?: string;
  exception: Exceptions;
}
