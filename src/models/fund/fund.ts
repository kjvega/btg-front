export interface Fund {
  id: string;
  name: string;
  minimumAmount: number;
  category: string;
}

export interface Transaction {
  id: string;
  type: string;
  fund: string;
  amount: number;
  date: Date;
  clientId: string;
}
