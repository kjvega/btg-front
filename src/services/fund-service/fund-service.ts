import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fund, Transaction} from '../../models/fund/fund';
import {environment} from '../../envairoments/envairoment';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  private apiUrl = environment.apiUrl+'funds';

  constructor(private http: HttpClient) {}

  // Obtener todos los fondos disponibles
  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this.apiUrl}`);
  }

  // Suscribirse a un fondo
  subscribe(clientId: string, fundId: string, amount: number, notificationType: string): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/subscribe`, {
      clientId,
      fundId,
      amount,
      notificationType
    });
  }

  // Cancelar suscripción a un fondo
  cancel(clientId: string, fundId: string): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/cancel`, {
      clientId,
      fundId
    });
  }

  // Obtener historial de transacciones de un cliente
  getHistory(clientId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/history/${clientId}`);
  }

}
