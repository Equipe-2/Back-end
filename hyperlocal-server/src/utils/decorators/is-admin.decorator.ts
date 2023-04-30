import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Exception } from '../exceptions/exception';
import { Exceptions } from '../exceptions/exceptionHandler';

@Injectable()
export class IsAdminAuthorization implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const httpRequest = context.switchToHttp().getRequest();

    const userData = httpRequest.user;

    if (userData?.role === 'admin') {
      return true;
    }

    throw new UnauthorizedException( 'user do not have permission to access this route' );
  }
}