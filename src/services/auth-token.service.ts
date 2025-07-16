import type { TToken } from '@/types/tokens.types';
import Cookies from 'js-cookie';

export class AuthTokenService {
  set(tokenName: TToken, token: string) {
    Cookies.set(tokenName, token, { expires: 7 });
  }

  get(tokenName: TToken) {
    return Cookies.get(tokenName);
  }

  remove(tokenName: TToken) {
    Cookies.remove(tokenName);
  }
}
