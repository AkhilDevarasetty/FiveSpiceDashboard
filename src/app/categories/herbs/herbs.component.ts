import { Component, Input, OnInit } from "@angular/core";
import { CarouselComponent } from "../../carousel/carousel.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-herbs",
  standalone: true,
  imports: [CarouselComponent,NgIf],
  templateUrl: "./herbs.component.html",
  styleUrl: "./herbs.component.css",
})
export class HerbsComponent implements OnInit {
  @Input() herbsAndGreensData: any;
  categoryName = "Herbs";

  ngOnInit(): void {
    /**Triggering the change by changing the category name since in the intial render
     * only the herbs component slides are not changing with this change the slides are moving as expected. */
    setTimeout(() => {
      this.categoryName = "Herbss";
    });
  }
}
