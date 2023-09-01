// Framework
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

// Domain
import { IException, IFormatException } from 'src/domain';

@Injectable()
export class ExceptionsService implements IException {
  badRequestException(data: IFormatException): void {
    throw new BadRequestException(data);
  }
  conflictException(data: IFormatException): void {
    throw new ConflictException(data);
  }
  internalServerErrorException(data?: IFormatException): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: IFormatException): void {
    throw new ForbiddenException(data);
  }
  UnauthorizedException(data?: IFormatException): void {
    throw new UnauthorizedException(data);
  }
}
