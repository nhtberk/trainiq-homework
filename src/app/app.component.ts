import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TrainIQ-homework';

  constructor(private dashboardService: DashboardService ){}

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(){
    this.dashboardService.allDashboardData().subscribe({
      next:(res)=>{
        console.log(res);

      }
    })
  }

}
