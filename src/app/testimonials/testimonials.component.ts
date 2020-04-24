import {Component, OnDestroy, OnInit} from '@angular/core';
import {Testimonial} from "../_shared/_models/testimonial.model";
import {Subscription} from "rxjs";
import {TestimonialService} from "../_shared/_services/testimonial.service";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  private testimonialsSub: Subscription;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getTestimonials();
    this.testimonialsSub = this.testimonialService.getTestimonialUpdateListener()
      .subscribe((testimonials: Testimonial[]) => {
        this.testimonials = testimonials;
      });
    this.testimonials = this.testimonialService.testimonials;
  }

  ngOnDestroy(): void {
    this.testimonialsSub.unsubscribe();
  }

}
