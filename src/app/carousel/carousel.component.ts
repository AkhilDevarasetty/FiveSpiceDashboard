import { JsonPipe, NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CarouselModule, NgFor, JsonPipe, NgIf],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
  @Input() productData: any[] = []; // Input property to receive product data
  @Input() categoryName: string = "";
  productsPerSlide = 16; // Define the number of products per slide
  chunkedProducts: any[] = [];
  myInterval = 10000; //intervel
  activeSlideIndex = 0; // used to change slides
  noWrap = false;
  isLoading: boolean = true;
  intervalId: any;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    /**this coondition is used since ngOnChanges lifecycle hook is called during first initialisation also */
    if (this.chunkedProducts.length) {
      this.isLoading = true;
      this.stopCarousel();
      this.activeSlideIndex = 0;
      this.chunkProducts();
      this.startCarousel();
    }
  }
  ngOnInit(): void {
    this.chunkProducts();
    this.startCarousel();
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

  /**this function is used to start the intervel for changing slides */
  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.myInterval);
  }

  /**this function is used to change the current slide to next slide by changing the activeSlideIndex value */
  nextSlide(): void {
    this.activeSlideIndex =
      (this.activeSlideIndex + 1) % this.chunkedProducts.length;
    // console.log(
    //   this.categoryName === "Herbs"
    //     ? `[${this.categoryName}] Next Slide - Active Index: ${this.activeSlideIndex}`
    //     : ""
    // );
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  /**this function is used to clear the existing intervel which is used for changing slides */
  stopCarousel(): void {
    clearInterval(this.intervalId);
  }
}
