import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 {
  path:'',component:HomeComponent
 },
 {
  path:'cafe',
  component:Component, 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
