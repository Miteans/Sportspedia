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
  teams_info=[];
  event_info=[];
  

  constructor(private cricketService:CricketService) { }

  ngOnInit(): void {
    
    this.cricketService.get_current_events().subscribe(data=>{
      var k=0;
      this.events = data['current_info'];
      
    
    this.cricketService.get_cricket_team_details().subscribe(data=>{
      this.teams_info = data['cricket_teams'];
      for(var i=0;i<this.events.length;i++)
      {
        for(var j=0;j<this.teams_info.length;j++){
          if(this.events[i]['team_ids'][k]==this.teams_info[j]['teams']['team_id']){
            this.events[i]['team_ids'][k]=this.teams_info[j]['teams']['abbreviation']
          }
          if(this.events[i]['team_ids'][k+1]==this.teams_info[j]['teams']['team_id']){
            this.events[i]['team_ids'][k+1]=this.teams_info[j]['teams']['abbreviation']
          }
        }
      }
      
      this.event_info=this.events;
      console.log(this.event_info);
      
    })
  })
    
  }
  setColChartData(t1,t2){
    let team1_count = 5
    let team2_count = 6
    let data = []
    this.event_info.forEach(element => {
    });

    data.push(['Teams','Count'])
    data.push([t1,team1_count])
    data.push([t2,team2_count])

    this.setChart(data)
  }

  setChart(dataTable){
    this.event_data =
    {
      chartType: "ColumnChart",
      dataTable: dataTable,
    };
  }

  }


