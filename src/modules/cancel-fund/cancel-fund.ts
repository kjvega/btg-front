import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubscribedFundModel} from '../../models/client/client';
import {DatePipe, DecimalPipe} from '@angular/common';
import {FundService} from '../../services/fund-service/fund-service';

@Component({
  selector: 'app-cancel-fund',
  imports: [
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './cancel-fund.html',
  styleUrl: './cancel-fund.scss'
})
export class CancelFund {
  private fundService = inject(FundService);
  constructor(
    private dialogRef: MatDialogRef<CancelFund>,
    @Inject(MAT_DIALOG_DATA) public data: { clientId: string, subscribedFunds: SubscribedFundModel[] }
  ) {}

  cancelFund(fundId: string) {
    const clientId = this.data.clientId;
    this.fundService.cancel(clientId, fundId)
      .subscribe({
        next: (response) => {
          console.log('Suscripción exitosa:', response);
          // Aquí puedes cerrar el modal y enviar un mensaje al padre
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al suscribir:', err);
        }
      });
  }

  close() {
    this.dialogRef.close();
  }

}
