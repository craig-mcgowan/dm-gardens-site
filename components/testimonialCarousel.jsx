import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import testimonials from "../public/testimonials";
import styles from "../styles/TestimonialCarousel.module.css"
import ClassNames from "embla-carousel-class-names";
import {GrFormPrevious} from "react-icons/gr/"
import {GrFormNext} from "react-icons/gr/"

const TestimonialCarousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const options = { delay: 7000 }; // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);



  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {testimonials.map((testimonial) => (
          <div className={styles.embla__slide}>
            <p>
              <span className={styles.testimonialText}>
                "{testimonial.review}"
              </span>{" "}
              -{testimonial.name}{" "}
            </p>
            {/* <img className={styles.pic} src={service.img} alt={service.text} /> */}
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={scrollPrev}>
        <GrFormPrevious />
      </button>
      <button className={styles.nextButton} onClick={scrollNext}>
        <GrFormNext />
      </button>
    </div>
  );
};

export default TestimonialCarousel
