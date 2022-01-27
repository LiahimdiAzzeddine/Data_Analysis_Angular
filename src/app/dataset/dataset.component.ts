import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  dataset:any[]=[];
  id: String="";

  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.getAllDataSet();
  }
  getAllDataSet(){
    this.appService.GetDataSet().subscribe((data: any) => this.dataset = data);
  }
  deleteData(id: any){
    this.appService.deleteData(id).subscribe(()=> this.getAllDataSet());
  }

}
