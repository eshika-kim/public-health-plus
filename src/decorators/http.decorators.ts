import type { PipeTransform } from '@nestjs/common';
import {
  applyDecorators,
  Param,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import type { Type } from '@nestjs/common/interfaces';
import { ApiCookieAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import type { RoleType } from '../constants/role-type.ts';
import { AuthGuard } from '../guards/auth.guard.ts';
import { RolesGuard } from '../guards/roles.guard.ts';
import { AuthUserInterceptor } from '../interceptors/auth-user-interceptor.service.ts';
import { SetCookieInterceptor } from '../interceptors/set-cookie-interceptor.service.ts';
import { PublicRoute } from './public-route.decorator.ts';
import { Roles } from './roles.decorator.ts';

export function Auth(
  roles: RoleType[] = [],
  options?: Partial<{ public: boolean }>,
): MethodDecorator {
  const isPublicRoute = options?.public;

  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard({ public: isPublicRoute }), RolesGuard),
    // ApiBearerAuth(),
    ApiCookieAuth(),
    UseInterceptors(AuthUserInterceptor, SetCookieInterceptor),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    PublicRoute(isPublicRoute),
  );
}

export function UUIDParam(
  property: string,
  ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
  return Param(property, new ParseUUIDPipe({ version: '4' }), ...pipes);
}
