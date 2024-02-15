import { Component, Input, OnInit } from "@angular/core";
import { CarouselComponent } from "../../carousel/carousel.component";
import { NgFor, JsonPipe, NgIf } from "@angular/common";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-vegetables",
  standalone: true,
  imports: [CarouselComponent, NgIf],
  templateUrl: "./vegetables.component.html",
  styleUrl: "./vegetables.component.css",
})
export class VegetablesComponent implements OnInit {
  @Input() vegetablesData: any;
  categoryName = "Vegetables";

  ngOnInit(): void {
    /**Triggering the change by changing the category name since in the intial render
     * only the herbs component slides are not changing with this change the slides are moving as expected. */
    // setTimeout(() => {
    //   this.categoryName = "Vegetabless";
    // });
  }
}
