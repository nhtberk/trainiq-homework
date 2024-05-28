import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TrainIQ-homework';

  public average_employee_score: string = '';
  public total_completed_courses: Number = 0;
  public total_employees: Number = 0;
  public top_skills: any;
  public top_employees: any;
  public in_progress_courses: any;
  public data: any;
  public skills_in_development: any;
  public upcoming_courses: any;
  public activity_hours: any;
  public options:any;
  public teams: any;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData() {
    this.dashboardService.allDashboardData().subscribe({
      next: (res) => {
        this.data = res;
        this.average_employee_score = this.data.data.average_employee_score;
        this.total_completed_courses = this.data.data.total_completed_courses;
        this.total_employees = this.data.data.total_employees;
        this.in_progress_courses = this.data.data.in_progress_courses;
        this.upcoming_courses = this.data.data.upcoming_courses;
        this.top_employees = this.data.data.top_employees;
        this.teams = this.data.data.teams;
        var obj: any = [];
        for (const a of this.data.data.activity_hours) {
          for (const [key, value] of Object.entries(a)) {
            if (key !== 'date') {
              const label = key.replace(/_/g, ' ').toUpperCase();
              const existingItem = obj.find((item: any) => item.label === label);
              if (existingItem) {
                existingItem.data.push(value);
              } else {
                obj.push({
                  type: 'bar',
                  label: label,
                  data: [value],
                });
              }
            }
          }
        }
        this.activity_hours = {
          labels: this.data.data.activity_hours.map(
            (a: { date: any }) => a.date
          ),
          datasets: obj,
        };
        this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              tooltip: {
                  mode: 'index',
                  intersect: false
              },

          },
          scales: {
              x: {
                  stacked: true,

                  grid: {

                      drawBorder: false
                  }
              },
              y: {
                  stacked: true,

                  grid: {

                      drawBorder: false
                  }
              }
          }
      };

        this.top_skills = {
          labels: this.data.data.top_skills.map((a: { skill: any }) => a.skill),
          datasets: [
            {
              data: this.data.data.top_skills.map(
                (a: { employees: any }) => a.employees
              ),
              backgroundColor: [
                '#FF5733',
                '#33FF57',
                '#5733FF',
                '#FF33A1',
                '#33FFF3',
                '#FF8C33',
                '#3380FF',
                '#A133FF',
                '#FFD133',
                '#33FF8C',
                '#FF3349',
                '#33A1FF',
              ],
            },
          ],
        };

        this.skills_in_development = {
          labels: this.data.data.skills_in_development.map(
            (a: { skill: any }) => a.skill
          ),
          datasets: [
            {
              data: this.data.data.skills_in_development.map(
                (a: { employees: any }) => a.employees
              ),
              backgroundColor: [
                '#FF5733',
                '#33FF57',
                '#5733FF',
                '#FF33A1',
                '#33FFF3',
                '#FF8C33',
                '#3380FF',
                '#A133FF',
                '#FFD133',
                '#33FF8C',
                '#FF3349',
                '#33A1FF',
              ],
            },
          ],
        };
      },
    });
  }
}
