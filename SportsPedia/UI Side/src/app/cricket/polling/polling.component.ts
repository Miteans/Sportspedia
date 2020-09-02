import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/app/services/cricket.service';
import { GoogleChartInterface, GoogleChartComponent } from 'ng2-google-charts';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  events = []
  event_data: GoogleChartInterface;

  constructor(private cricketService:CricketService) { }

  ngOnInit(): void {
    this.cricketService.get_events_details().subscribe(data=>{
      this.events = data['event_info']
      this.setColChartData();
    })}
    setColChartData(){
      let t1_count = 0
      let t2_count = 0
      let data = []
      this.events.forEach(element => {
        console.log(element.team_ids[1]);
        if(element.team_ids[0] == 'ipl_mi'){
          t1_count=5;
        }
        else{
          t2_count=6;
        }
      });
  
      data.push(['Team','Percent'])
      data.push(['MI',t1_count])
      data.push(['RCB',t2_count])
      this.setChart(data)
    }
  
    setChart(dataTable){
      this.event_data =
      {
        chartType: "ColumnChart",
        dataTable: dataTable,
        options: {
          height: 400,
          width: 200,
          tooltip : {
            textStyle:{
              fontName: 'Lato', 
              fontSize: '13'
            }
          },
          legend: {
            position: "top",
            alignment: "end",
            textStyle:{
              fontName: 'Lato', 
              fontSize: '14'
            }
          },
          colors:["#FDA100"],
        }
      };
    }

  }


