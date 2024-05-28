
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardService } from 'src/services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    ChartModule,
    TooltipModule,
    AccordionModule,
    BadgeModule,
    BrowserAnimationsModule,
    ButtonModule,
    TagModule
  ],
  providers: [ DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
