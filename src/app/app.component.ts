import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {dashboardData} from '../data';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'five-spice-dashboard';
  constructor(private _httpClient: HttpClient) {
    // this._httpClient
    //   .get('http://api.fivespiceindiangrocery.com/api/products/produce')
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
    console.log(dashboardData);
    
  }
}
