import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientService} from '../../services/client-service/client-service';
import {ClientModel, SubscribedFundModel} from '../../models/client/client';
import {AddFund} from '../add-fund/add-fund';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {TableInfoFunds} from '../table-info-funds/table-info-funds';
import {AlertService} from '../../core/services/alert/alert-service';
import {CancelFund} from '../cancel-fund/cancel-fund';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [
    CommonModule,
    MatDialogModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './client.html',
  styleUrl: './client.scss'
})
export class Client implements OnInit {
  clients: ClientModel[] = [];
  readonly dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();

  }

  getClients(){
    this.clientService.getClients().subscribe({
      next: (data) => (this.clients = data),
      error: (err) => console.error('Error fetching clients:', err)
    });

  }

  addFund(clientId:String){
    const dialogRef = this.dialog.open(AddFund, {
      width: '600px',
      height: '500px',
      data: {
        clientId
      },
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.alertService.showAlert('success', 'Acción Satisfactoria');
        this.getClients();
      }
    });
  }

  canselFund(clientId:string, subscribedFunds:SubscribedFundModel[]){
    const dialogRef = this.dialog.open(CancelFund, {
      width: '600px',
      height: '500px',
      data: {
        clientId,
        subscribedFunds
      },
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.alertService.showAlert('success', 'Acción Satisfactoria');
        this.getClients();
      }
    });

  }

  viewFound(){
    const dialogRef = this.dialog.open(TableInfoFunds, {
      height: '400px',
      autoFocus: true,
    });

  }
}
