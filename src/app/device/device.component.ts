import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices:any[]=[];
  id=0;

  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.GetDecices();
  }
  GetDecices(){
    this.appService.GetDecices().subscribe((data: any) => this.devices = data);
  }
}
