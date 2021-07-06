import { Component, AfterViewInit,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren, } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() {}
  @ViewChildren('mySlides')
  mySlide!: QueryList<CarouselComponent>;
  @ViewChildren('dot')
  dot!: QueryList<CarouselComponent>;

  slideIndex = 1;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  scrollList = [
    {
      
      img: './../../../../assets/car21.jpg',
     
    },
    {
     
      img: './../../../../assets/car11.jpg',
  
    },

    {
     
      img: './../../../../assets/car13.jpg',
    },
    {
      
      
      img: './../../../../assets/car12.jpg',
    },
  ];

  plusSlides(n: any) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: any) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: any) {
    let i;
    let dots: any[] = this.dot.toArray();
    let slides: any[] = this.mySlide.toArray();

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].nativeElement.style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].nativeElement.className = dots[i].nativeElement.className.replace(
        ' active',
        ''
      );
    }
    slides[this.slideIndex - 1].nativeElement.style.display = 'block';
    dots[this.slideIndex - 1].nativeElement.className += ' active';
  
  }
}