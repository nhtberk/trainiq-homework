import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  allDashboardData(){
    return this.http.get('https://demotrainiq.com/case/dashboard')
  }

}
