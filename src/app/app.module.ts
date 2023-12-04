import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { MaterialComponentComponent } from './pages/material-component/material-component.component';
import { SharedComponent } from './pages/shared/shared.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    DashboardComponent,
    HomeComponent,
    LayoutsComponent,
    MaterialComponentComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
