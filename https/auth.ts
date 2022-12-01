import { ResponseError } from 'types/ResponseError';

export type SignInDto = {
  email: string;
  password: string;
};

export type SigninResponse = {
  email: string;
  password: string;
};

class AuthApi {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async signin(data: SignInDto) {
    const response = await fetch(`${this.url}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = (await response.json()) as ResponseError;
      throw new Error(errorData.message);
    }
    return response.json();
  }

  async getCurrentUser() {
    const response = await fetch(`${this.url}/auth/current-user`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = (await response.json()) as ResponseError;
      throw new Error(errorData.message);
    }
    return response.json();
  }

  async signout() {
    const response = await fetch(`${this.url}/auth/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = (await response.json()) as ResponseError;
      throw new Error(errorData.message);
    }
    return response.json();
  }
}

export const authApi = new AuthApi(process.env.NEXT_PUBLIC_BACKEND_URL || '');
