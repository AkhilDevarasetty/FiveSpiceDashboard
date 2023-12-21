import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor() {
    /**Commented for future use */
    // this._httpClient
    //   .get('http://api.fivespiceindiangrocery.com/api/products/produce')
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
  }
}
