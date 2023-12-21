import { Component, Inject, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector: "app-fruits",
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: "./fruits.component.html",
  styleUrl: "./fruits.component.css",
})
export class FruitsComponent implements OnInit {
  @Input() fruitsData: any;
  @Input() productsPerSlide: number = 0; //Test Variable

  constructor() {}
  ngOnInit(): void {}
}
