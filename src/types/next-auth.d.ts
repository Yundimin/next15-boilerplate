/* @see https://authjs.dev/getting-started/typescript#extend-default-interface-properties */
/**
 * name, email, image 외에 추가 속성을 정의
 */
import { UserType } from './account';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    name?: string;
    image?: string;
    type?: UserType;
    brandId?: string;
    accessToken: string;
    refreshToken: string;
  }
  interface Session extends DefaultSession {
    user: User;
  }
}
