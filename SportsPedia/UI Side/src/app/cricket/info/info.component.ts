import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../services/cricket.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  cric:any[] = [];
  images:string;
  constructor(private cricketService:CricketService) { }
  cricket_details(){
    this.cricketService.get_cricket_details().subscribe(res => {
      this.cric = res['cricket_info'];
      console.log(this.cric);
      this.images = this.cric[0].image;
      console.log(this.images);
    })
  }
  cricket_display()
  {
    this.cricket_details()
  }
  ngOnInit() {
    this.cricket_display();
  }

}
