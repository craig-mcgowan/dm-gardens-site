import styles from "../styles/Carousel.module.css"
import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const services = [
      {
        text: "Garden Design",
        img: "https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663018679/Dan%20Miller%20Gardens/image_3_ogitz3.jpg",
      },
      {
        text: "Plantings",
        description: "",
        img: "https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663018679/Dan%20Miller%20Gardens/image_1_uo8tnt.jpg",
      },
      {
        text: "Maintenance",
        description: "",
        img: "https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663018679/Dan%20Miller%20Gardens/image_vd6j6f.jpg",
      },
      {
        text: "Lighting",
        description: "",
        img: "https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663090583/Dan%20Miller%20Gardens/0a4f21ae06569fe2c8a2a7e11f39285a_pj2xy4.jpg",
      },
      {
        text: "Irrigation",
        description: "",
        img: "https://res.cloudinary.com/dm9ig1vtk/image/upload/v1663089131/Dan%20Miller%20Gardens/eric-brehm-fZDIGIZ1e8E-unsplash_yfnmk7.jpg",
      },
    ];

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