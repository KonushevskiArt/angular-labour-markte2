export interface LoginResponse {
  token: string
}

export interface SignUpResponse {
  message: string
}

export interface LoginData {
  username: string,
  password: string,
}

export interface SignUpData {
  username: string,
  email: string,
  password: string,
}