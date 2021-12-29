import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KundendatenAuswahlGuard } from './core/guard/kundendaten-auswahl.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./view/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./view/detail-page/detail-page.module').then(m => m.DetailPageModule),
    canActivate: [KundendatenAuswahlGuard]
  },
  {
    path: '**',
    redirectTo: '/landing-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
