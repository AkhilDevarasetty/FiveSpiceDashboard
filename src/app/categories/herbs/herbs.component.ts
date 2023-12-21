import { Component, Input, OnInit } from "@angular/core";
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector: "app-herbs",
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: "./herbs.component.html",
  styleUrl: "./herbs.component.css",
})
export class HerbsComponent implements OnInit {
  @Input() herbsAndGreensData: any;
  @Input() productsPerSlide: number = 0; // Test Variable
  ngOnInit(): void {}
}
