export interface ClientModel {
  id: string;
  name: string;
  balance: number;
  subscribedFunds: SubscribedFundModel[];
}

export interface SubscribedFundModel {
  fundId: string;
  name: string;
  investedAmount: number;
  date: string;
}

