// Framework
import { HttpCode, HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

interface IServiceSwaggerOpts extends OperationObject {
  description: string;
  summary: string;
}

export const ServiceSwagger = (
  type: any,
  opts?: Partial<IServiceSwaggerOpts>,
) => {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOperation(opts),
    ApiOkResponse({
      status: HttpStatus.OK,
      type,
    }),
  );
};
