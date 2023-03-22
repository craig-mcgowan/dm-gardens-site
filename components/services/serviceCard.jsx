import { useState } from "react";
import { serviceCard, serviceLabel, serviceThumb, serviceThumbHovered, serviceLabelHovered } from "./serviceCard.module.css"


export default function ServiceCard({ text, img }) {
  const [hovered, setHovered] = useState(false)
  
  
  return (
    <div
      className={serviceCard}
      onMouseOver={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
    >
      <p className={hovered ? serviceLabelHovered : serviceLabel}>{text}</p>
      <img
        className={hovered ? serviceThumbHovered : serviceThumb}
        src={img}
        alt={text}
      ></img>
    </div>
  );
}