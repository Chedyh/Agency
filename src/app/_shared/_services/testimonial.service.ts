import {Injectable, OnInit} from '@angular/core';
import {Testimonial} from "../_models/testimonial.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TestimonialService {
  testimonials: Testimonial[] = [
    {
      _id: '1',
      name: 'daneuleur',
      img: '../../../assets/images/testimonials/01.jpg',
      product: 'sleeve',
      review: 'Shadi was very responsive and understood my vision perfectly.' +
        ' He found relevant footage for my project and organized it in a way that ' +
        'flowed very well. I had a few modification requests and he addressed them immediately,' +
        ' no questions asked. I will definitely consider using Shadi for future projects!',
      rating: '5'
    },
    {
      _id: '5',
      name: 'daneuleur',
      img: '../../../assets/images/testimonials/01.jpg',
      product: 'sleeve',
      review: 'Shadi was very',
      rating: '5'
    },
    {
      _id: '2',
      name: 'daneuleur',
      img: '../../../assets/images/testimonials/01.jpg',
      product: 'sleeve',
      review: 'Shadi was very responsive and understood my vision perfectly.' +
        ' He found relevant footage for my project and organized it in a way that ',
      rating: '5'

    },
    {
      _id: '3',
      name: 'daneuleur',
      img: '../../../assets/images/testimonials/01.jpg',
      product: 'sleeve',
      review: 'Shadi was very responsive and understood my vision perfectly.',
      rating: '5'


    },
    {
      _id: '4',
      name: 'daneuleur',
      img: '../../../assets/images/testimonials/01.jpg',
      product: 'sleeve',
      review: 'Shadi was very responsive and understood my vision perfectly.',
      rating: '5'
    },

  ];

  private testimonialsUpdated = new Subject<Testimonial[]>();

  public getTestimonials() {
    this.testimonialsUpdated.next([...this.testimonials]);
  }

  public getTestimonialUpdateListener() {
    return this.testimonialsUpdated.asObservable();
  }

  public addTestimonial(testimonial: Testimonial) {
    this.testimonials.push(testimonial);
    this.testimonialsUpdated.next([...this.testimonials]);
  }
}
