import {Component, inject} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {ClientModel} from '../../models/client/client';
import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../core/services/alert/alert-service';
import {ClientService} from '../../services/client-service/client-service';
import {Transaction} from '../../models/fund/fund';
import {FundService} from '../../services/fund-service/fund-service';

@Component({
  selector: 'app-history-transactions',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './history-transactions.html',
  styleUrl: './history-transactions.scss'
})
export class HistoryTransactions {
  transactions: Transaction[] = [];

  constructor(private FundService: FundService) {}

  ngOnInit(): void {
    this.getHistory();

  }

  getHistory(){
    this.FundService.getHistory("1").subscribe({
      next: (data) => (this.transactions = data),
      error: (err) => console.error('Error fetching clients:', err)
    });

  }


}
