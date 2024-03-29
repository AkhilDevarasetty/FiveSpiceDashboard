import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FruitsComponent } from "../categories/fruits/fruits.component";
import { VegetablesComponent } from "../categories/vegetables/vegetables.component";
import { HerbsComponent } from "../categories/herbs/herbs.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    FruitsComponent,
    VegetablesComponent,
    HerbsComponent,
    CarouselComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("categoryColumn") categoryColumn!: ElementRef<HTMLDivElement>;
  fruitsData: any;
  vegetablesData: any;
  herbsAndGreensData: any;
  dashBoardTitle: string = "Welcome to Five Spice Grocery Store - San Jose";
  isProductsDataNotFetched: boolean = true;
  errorFlag: boolean = false;
  errorMessage: string = "";
  apiCallIntervel = 300000; //5 mins intervel(300000)
  apiCallSubscription: Subscription | undefined;
  constructor(private _httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getProductsData();
    const apiCallObservable = interval(this.apiCallIntervel);
    apiCallObservable.subscribe(() => {
      this.getProductsData();
    });
  }

  ngAfterViewInit(): void {
    // this.adjustProductsPerSlide();
  }

  getProductsData(): void {
    this._httpClient
      .get("https://api.fivespiceindiangrocery.com/api/products/produce")
      .subscribe(
        (response: any) => {
          this.isProductsDataNotFetched = false;
          this.fruitsData = response["Fruits"];
          this.vegetablesData = response["Vegetables"];
          this.herbsAndGreensData = response["Herbs and Greens"];
        },
        (error) => {
          this.errorFlag = true;
          this.errorMessage = error.message;
        }
      );
  }

  /**Function to adjust the number of products per slide based on available height - In testing */
  // adjustProductsPerSlide(): void {
  //   const columnElement = this.categoryColumn.nativeElement;
  //   const columnStyles = getComputedStyle(columnElement);
  //   const paddingTop = parseInt(columnStyles.paddingTop, 10);
  //   const paddingBottom = parseInt(columnStyles.paddingBottom, 10);
  //   const columnHeight =
  //     columnElement.clientHeight - paddingTop - paddingBottom;

  //   const cardElement = columnElement.querySelector(".card");
  //   if (cardElement) {
  //     const cardStyles = getComputedStyle(cardElement);
  //     const cardMargin = parseInt(cardStyles.marginBottom, 10);

  //     const cardHeight = cardElement.clientHeight + cardMargin;
  //     this.productsPerSlide = Math.floor(columnHeight / cardHeight);

  //     console.log("Products per slide:", this.productsPerSlide);
  //   }
  // }

  ngOnDestroy(): void {
    this.apiCallSubscription && this.apiCallSubscription.unsubscribe();
  }
}
