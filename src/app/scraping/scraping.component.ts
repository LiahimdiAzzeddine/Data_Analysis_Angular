import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {
  item= {
    url:'',
    balise1:'',
    classe1:'',
    attribute1:'',
    balise2:'',
    classe2:'',
    attribute2:'',
    balise3:'',
    classe3:'',
    attribute3:'',
    balise4:'',
    classe4:'',
    attribute4:'',
    balise5:'',
    classe5:'',
    attribute5:'',
  }
  dataHtml:String="";
  constructor(
    private appService:AppService,
  ) { }

  getDataHtml(){
    this.appService.DataHtml(this.item.url).subscribe((data: any) => this.dataHtml = data);
  }
  donne(){
    this.appService.Donnee(this.item).subscribe((data: any) => this.dataHtml = data);
  }

  ngOnInit(): void {
  }

}
