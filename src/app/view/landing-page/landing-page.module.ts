import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingPageModule { }
