import { trigger, transition, style, animate } from "@angular/animations";
import { NgFor } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent implements OnInit {
  @Input() productData: any[] = []; // Input property to receive product data
  @Input() categoriesData: any[] = []; //Used for Sequential rendering of slides
  @Input() cproductsPerSlide: number = 0; //Test Variable
  productsPerSlide = 9; // Define the number of products per slide
  chunkedProducts: any[] = [];
  myInterval = 3000;
  activeSlideIndex = 0;
  noWrap = false;
  ngOnInit(): void {
    this.chunkProducts();
  }
  /**chunkProducts is used to slice the array based on the  productsPerSlide variable*/
  chunkProducts() {
    for (let i = 0; i < this.productData.length; i += this.productsPerSlide) {
      this.chunkedProducts.push(
        this.productData.slice(i, i + this.productsPerSlide)
      );
    }
  }
}
