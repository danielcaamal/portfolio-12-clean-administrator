import { IFormatException } from './format-exception.interface';

export interface IException {
  badRequestException(data: IFormatException): void;
  conflictException(data: IFormatException): void;
  internalServerErrorException(data?: IFormatException): void;
  forbiddenException(data?: IFormatException): void;
  UnauthorizedException(data?: IFormatException): void;
}
