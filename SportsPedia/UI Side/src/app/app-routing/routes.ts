import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CricketComponent } from '../cricket/cricket.component';
import { InfoComponent } from '../cricket/info/info.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cricket',  component: CricketComponent },
  { path: '', redirectTo: '/cricket', pathMatch: 'full' },
  { path: 'cricket/info',  component: InfoComponent },
  { path: '', redirectTo: '/cricket/info', pathMatch: 'full' }
  
];