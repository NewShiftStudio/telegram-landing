import { SignInDto } from 'types/dto/auth/signin';

export class AuthAPI {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  signIn(data: SignInDto) {
    return fetch(`${this.url}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  getCurrentUser() {
    return fetch(`${this.url}/auth/current-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  signout() {
    return fetch(`${this.url}/auth/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }
}

export const authApi = new AuthAPI(process.env.NEXT_PUBLIC_BACKEND_URL || '');
