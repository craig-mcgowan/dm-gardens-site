import styles from "../styles/Carousel.module.css"
import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import services from "../public/services";
// import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {services.map((service) => (
          <div className={styles.embla__slide}>
            <p>{service.text}</p>
            <img className= {styles.pic} src={service.img} alt={service.text} />
          </div>
        ))}
      </div>
    </div>
  );
};