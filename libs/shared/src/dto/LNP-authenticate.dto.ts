export interface LNPAuthenticateDto {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface LNPAuthenticateResponseDto {
  id_token: string;
}
