// Framework
import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const ControllerSwagger = (title: string) => {
  return applyDecorators(
    ApiTags(title),
    ApiBadRequestResponse({ description: 'Bad request' }),
    ApiConflictResponse({ description: 'Conflict' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiInternalServerErrorResponse({ description: 'Internal server error' }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
};
