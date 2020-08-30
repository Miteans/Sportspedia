import { Component, OnInit } from '@angular/core';
import { KabaddiService } from '../../services/kabaddi.service';
@Component({
  selector: 'app-kabinfo',
  templateUrl: './kabinfo.component.html',
  styleUrls: ['./kabinfo.component.css']
})

export class KabinfoComponent implements OnInit {
  kab:any[] = [];
  images:string;
  constructor(private kabaddiService:KabaddiService) { }
  kabaddi_details(){
    this.kabaddiService.get_kabaddi_details().subscribe(res => {
      this.kab = res['kabaddi_info'];
      console.log(this.kab);
      this.images = this.kab[0].image;
      console.log(this.images);
    })
  }
  kabaddi_display()
  {
    this.kabaddi_details()
  }
  ngOnInit() {
    this.kabaddi_display();
  }

}
