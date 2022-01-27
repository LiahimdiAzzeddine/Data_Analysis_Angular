import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import  {GestionUtilisateursComponent} from './gestion-utilisateurs/gestion-utilisateurs.component'
import  {LoginComponent} from './login/login.component'
import  {AppComponent} from './app.component'
import {AuthGuard} from '././login/auth.guard'
import {LogoutGuard} from '././login/logout.guard'
import{ScrapingComponent} from '././scraping/scraping.component'
import{DatasetComponent} from '././dataset/dataset.component'
import{DeviceComponent} from '././device/device.component'
import{HomeComponent} from '././home/home.component'
import{KMeansComponent} from '././kmeans/kmeans.component'
const routes: Routes=[
{path:"",redirectTo:"homepage",pathMatch:"full" },
{path:"gestion_utilisateurs",component: GestionUtilisateursComponent,canActivate:[AuthGuard]},
{path:"login",component:LoginComponent,canActivate:[LogoutGuard]},
{path:"app",component:AppComponent,canActivate:[AuthGuard]},
{path:"scraping",component:ScrapingComponent,canActivate:[AuthGuard]},
{path:"dataset",component:DatasetComponent,canActivate:[AuthGuard]},
{path:"devices",component:DeviceComponent,canActivate:[AuthGuard]},
{path:"homepage",component:HomeComponent},
{path:"kmeans",component:KMeansComponent,canActivate:[AuthGuard]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
