import { Component, Input, OnInit } from "@angular/core";
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector: "app-vegetables",
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: "./vegetables.component.html",
  styleUrl: "./vegetables.component.css",
})
export class VegetablesComponent implements OnInit {
  @Input() vegetablesData: any;
  @Input() productsPerSlide: number = 0; //Test Variable
  ngOnInit(): void {}
}
