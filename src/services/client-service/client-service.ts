import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../envairoments/envairoment';
import {ClientModel} from '../../models/client/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.apiUrl+'clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl);
  }

}
