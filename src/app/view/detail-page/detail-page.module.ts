import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { DetailPageComponent } from './detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent
  }
];

@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetailPageModule { }
