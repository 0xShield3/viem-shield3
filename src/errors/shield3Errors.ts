import { BaseError } from './base.js';

export class Shield3ConnectionError extends BaseError {
  constructor(message: string, details?: any) {
    super(message, details);
    this.name = 'Shield3ConnectionError';
  }
}

export class Shield3PolicyViolationError extends BaseError {
  constructor(message: string, details?: any) {
    super(message, details);
    this.name = 'Shield3PolicyViolationError';
  }
}