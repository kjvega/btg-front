import { Routes } from '@angular/router';
import {LandingPage} from '../components/landing-page/landing-page';
import {Client} from '../modules/client/client';
import {HistoryTransactions} from '../modules/history-transactions/history-transactions';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPage},
  { path: 'client', component: Client},
  { path: 'history', component: HistoryTransactions},
];
