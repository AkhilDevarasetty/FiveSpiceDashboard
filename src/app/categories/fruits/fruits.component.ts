import { Component, Inject, Input, OnInit, SimpleChanges } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CarouselComponent } from "../../carousel/carousel.component";
import { NgFor, JsonPipe, NgIf } from "@angular/common";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-fruits",
  standalone: true,
  imports: [CarouselComponent,NgIf],
  templateUrl: "./fruits.component.html",
  styleUrl: "./fruits.component.css",
})
export class FruitsComponent implements OnInit {
  @Input() fruitsData: any;
  categoryName: string = "Fruits";

  ngOnInit(): void {}
}
