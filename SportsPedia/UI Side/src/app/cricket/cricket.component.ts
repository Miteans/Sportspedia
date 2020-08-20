import { Component, OnInit } from '@angular/core';
import { CricketService } from '../services/cricket.service';
import { DomSanitizer,SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  cric:any[] = [];
  constructor(private cricketService:CricketService,private sanitizer:DomSanitizer) { }
  ck:boolean;
  ngOnInit() {
    this.cricket_display();
  }

  cricket_details(){
    this.cricketService.get_cricket_details().subscribe(res => {
      console.log(res);
      this.cric = res['cricket_info'];
      console.log(this.cric);
      for(var i = 0; i < this.cric.length; i++) {
            var captchaSrc = this.cric[i][2];
        }
    })
  }
  cricket_display()
  {
    this.ck = true;
    this.cricket_details()
  }

}