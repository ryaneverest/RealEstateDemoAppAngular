import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'home' },
  { path: 'home',  component: AdminHomeComponent },
];
@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
