import { JsonPipe, NgFor, NgIf } from "@angular/common";
import {
  AfterContentInit,
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
export class CarouselComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {}


  /**Below code is doesnt have any impact on the existing functionality - Just Keeping the code for reference */
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
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  /**this function is used to clear the existing intervel which is used for changing slides */
  stopCarousel(): void {
    clearInterval(this.intervalId);
  }
}
