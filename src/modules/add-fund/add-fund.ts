import {Component, Inject, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FundService} from '../../services/fund-service/fund-service';
// @ts-ignore
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Alert} from '../../shared/components/alert/alert';
import {TableInfoFunds} from '../table-info-funds/table-info-funds';
import {minimumAmountValidator} from '../../shared/custom-validators/custom-validation';

@Component({
  selector: 'app-add-fund',
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './add-fund.html',
  styleUrl: './add-fund.scss'
})
export class AddFund implements OnInit {
  private fundService = inject(FundService);
  addFundForm:FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<AddFund>,
              @Inject(MAT_DIALOG_DATA) public data: { clientId: string }
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.addFundForm = new FormGroup({
      fundId: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required,minimumAmountValidator()]),
      notificationType: new FormControl('',[Validators.required])

    });
  }

  saveFund(){
    if(this.addFundForm.invalid){
      this.addFundForm.markAllAsTouched();
      return
    }
    let clientId = this.data.clientId;
    const fundId = this.addFundForm.get('fundId')?.value
    const amount = this.addFundForm.get('amount')?.value
    const notificationType = this.addFundForm.get('notificationType')?.value
    this.fundService.subscribe(clientId, fundId, amount, notificationType)
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

  closeModal(){
    this.dialogRef.close(false);
  }

}
