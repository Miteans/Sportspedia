import { Component, OnInit } from '@angular/core';
import { CricketService } from 'src/app/services/cricket.service';
import { GoogleChartInterface, GoogleChartComponent } from 'ng2-google-charts'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  international_teams = []
  ipl_teams = []
  first_chartdata: GoogleChartInterface;
  teamId:any;
  players: any;

  constructor(private cricketService:CricketService) { }

  ngOnInit(): void {
    this.cricketService.get_cricket_international_team_details().subscribe(data=>{
      this.international_teams = data['international_cricket_teams']
      console.log(this.international_teams)
    })

    this.cricketService.get_cricket_ipl_teams_details().subscribe(data=>{
      this.ipl_teams = data['ipl_cricket_teams']
      console.log(this.ipl_teams)
    })

  }

  get_players(){
    this.cricketService.get_players_of_a_team(this.teamId).subscribe(data=>{
        this.players = data['team_players']
        console.log(this.players)
        this.setPieChartData();
      })
  }

  setPieChartData(){
    let bowler_count = 0
    let batsman_count = 0
    let all_rounder_count = 0
    let data = []
    this.players.forEach(element => {
      if(element.role == 'Batsman'){
        batsman_count += 1
      }
      else if(element.role == 'Bowler'){
        bowler_count += 1
      }
      else{
        all_rounder_count += 1
      }
    });

    data.push(['Role','Count'])
    data.push(['Batsman',batsman_count])
    data.push(['Bowler',bowler_count])
    data.push(['All-Rounder',all_rounder_count])

    this.setChart(data)
  }

  setChart(dataTable){
    this.first_chartdata =
    {
      chartType: "PieChart",
      dataTable: dataTable,
      options: {
        height: 400,
        //width: 2500,
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
        colors:["#23543E","#70AB91","#AFAEA1"],
      }
    };
  }

}
