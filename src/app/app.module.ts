import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './login/auth.guard'
import {LogoutGuard} from './login/logout.guard';
import { ScrapingComponent } from './scraping/scraping.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DeviceComponent } from './device/device.component';
import { HomeComponent } from './home/home.component';
import { KMeansComponent } from './kmeans/kmeans.component'

@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateursComponent,
    LoginComponent,
    ScrapingComponent,
    DatasetComponent,
    DeviceComponent,
    HomeComponent,
    KMeansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
