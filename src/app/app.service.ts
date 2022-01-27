import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http:HttpClient,
  ) { }
  getAll(){
    return this.http.get(`http://localhost:8080/findAllUtilisateurs`);
  }
  update(id: string,utilisateur: any){
    return this.http.put(`http://localhost:8080/updateUtilisateur/${id}`,utilisateur);
  }
  create(Utilisateur: any){
    return this.http.post(`http://localhost:8080/addUtilisateur`,Utilisateur);
  }
  delete(id: string){
    return this.http.delete(`http://localhost:8080/deleteUtilisateur/${id}`);
  }
  DataHtml(url: string){
    return this.http.put(`http://localhost:8080/datahtml`,url);
  }
  Donnee(item: any){
    return this.http.put(`http://localhost:8080/donne`,item);
  }
  GetDataSet(){
    return this.http.get(`http://localhost:8080/findAllDataSet`);
  }
  deleteData(id: string){
    return this.http.delete(`http://localhost:8080/deleteData/${id}`);
  }
  GetDecices(){
    return this.http.get(`http://localhost:8080/findAllDevices`);
  }
  createKmean(modele: any){
    return this.http.put(`http://localhost:8080/addModele`,modele);
  }
}
