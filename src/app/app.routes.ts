import { Routes } from '@angular/router';
import {LandingPage} from '../components/landing-page/landing-page';
import {Client} from '../modules/client/client';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPage},
  { path: 'client', component: Client},
];
