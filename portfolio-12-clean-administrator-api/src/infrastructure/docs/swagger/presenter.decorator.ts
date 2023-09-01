// Framework
import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

interface IPresenterSwaggerOpts extends ApiPropertyOptions {
  required: boolean;
  description: string;
  type?: any;
  enum?: any;
}

export const PresenterSwagger = (opts: IPresenterSwaggerOpts) => {
  return applyDecorators(ApiProperty(opts));
};
