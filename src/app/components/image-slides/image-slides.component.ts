import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-slides',
  templateUrl: './image-slides.component.html',
  styleUrls: ['./image-slides.component.css']
})
export class ImageSlidesComponent implements OnInit {
 slideIndex = 1;
 @Input() images: any[]  = [];
 @Input() height: number ;

  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

// Next/previous controls
 plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

 showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  ((slides[this.slideIndex-1]) as HTMLElement).style.display = "block";
  dots[this.slideIndex-1].className += " active";
}

}
