export interface Login {
  email: string;
  mot_de_passe: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  msg?: string;
}

export interface SignupResponse {
  msg?: string;
  request_id: number;
}
