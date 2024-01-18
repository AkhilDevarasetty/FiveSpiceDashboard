import { JsonPipe, NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CarouselModule, NgFor, JsonPipe, NgIf],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() productData: any[] = []; // Input property to receive product data
  productsPerSlide = 16; // Define the number of products per slide
  chunkedProducts: any[] = [];
  myInterval = 10000;
  activeSlideIndex = 0;
  noWrap = false;
  isLoading: boolean = true;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    this.chunkProducts();
  }
  ngOnInit(): void {
    this.chunkProducts();
  }
  /**chunkProducts is used to slice the array based on the  productsPerSlide variable*/
  chunkProducts() {
    if (this.chunkedProducts.length > 0) this.chunkedProducts.length = 0;
    for (let i = 0; i < this.productData.length; i += this.productsPerSlide) {
      this.chunkedProducts.push(
        this.productData.slice(i, i + this.productsPerSlide)
      );
    }
    this.isLoading = false;
  }
}
