import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CricketComponent } from '../cricket/cricket.component';
import { InfoComponent } from '../cricket/info/info.component';
import { KabaddiComponent } from '../kabaddi/kabaddi.component';
import { KabinfoComponent } from '../kabaddi/kabinfo/kabinfo.component';
import { TeamsComponent } from '../cricket/teams/teams.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cricket',  component: CricketComponent },
  { path: '', redirectTo: '/cricket', pathMatch: 'full' },
  { path: 'cricket/info',  component: InfoComponent },
  { path: '', redirectTo: '/cricket/info', pathMatch: 'full' },
  { path: 'kabaddi',  component: KabaddiComponent },
  { path: '', redirectTo: '/kabaddi', pathMatch: 'full' },
  { path: 'kabaddi/kabinfo',  component: KabinfoComponent },
  { path: '', redirectTo: '/kabaddi/kabinfo', pathMatch: 'full' },
  { path: 'cricket/teams', component:TeamsComponent }
  ];