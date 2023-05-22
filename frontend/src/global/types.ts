export interface userState {
  token: string;
  user: profileType;
}
export interface profileType {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

export interface nameType {
  firstName: string;
  lastName: string;
}

export interface transactionType {
  date: string;
  description: string;
  amount: number;
  balance: number;
}
