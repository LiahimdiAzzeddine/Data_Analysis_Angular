import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-kmeans',
  templateUrl: './kmeans.component.html',
  styleUrls: ['./kmeans.component.css']
})
export class KMeansComponent implements OnInit {
  modeles:any[]=[];
  modele= {
    dataSet: "xxx",
    nom: '',
    K:null,
  }

  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
  }
  createKmean(){
    this.appService.createKmean(this.modele).subscribe((data: any) =>this.modeles = data); 
    this.modele={
      dataSet: 'oo',
    nom: '',
    K:null,
    }
  }

}
