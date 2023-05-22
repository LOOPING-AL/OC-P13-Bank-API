export enum MessageError {
  BAD_EMAIL = "Bad email",
  BAD_PASSWORD = "Bad password",
  BAD_CREDENTIALS = "Bad credentials",
  BAD_ROUTE = "Vous devez vous identifier avant d'accéder à une page",
  RETRY = "Retry in few minutes (error: ",
}
export enum Routes {
  HOME = "/",
  SIGNIN = "/login",
  USER = "/profile",
  TRANSACTIONS = "/transactions",
}
