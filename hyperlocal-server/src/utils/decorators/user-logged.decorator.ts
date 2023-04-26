import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from 'src/user/entities/user.entity';

export const userLogged = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);