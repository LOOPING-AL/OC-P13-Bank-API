export enum MessageError {
  BAD_EMAIL = "Bad email",
  BAD_PASSWORD = "Bad password",
  BAD_CREDENTIALS = "Bad credentials",
  BAD_ROUTE = "Vous devez vous identifier avant d'accéder à une page",
  RETRY = "Retry in few minutes (error: ",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}

export enum Routes {
  HOME = "/",
  LOGIN = "/login",
  USER = "/profile",
  TRANSACTIONS = "/transactions",
}
