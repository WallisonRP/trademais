import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RectangleIcon } from "../RectangleIcon";
import shieldPlus from "../../assets/icons/shield-plus.png";
import shieldVerified from "../../assets/icons/shield-verified.png";
import clockIcon from "../../assets/icons/clock.png";


export function HeroCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} transitionTime={2} infiniteLoop width={200}>
            <RectangleIcon title="+ SEGURO" iconPath={shieldPlus} />
        <RectangleIcon title="+ RAPIDO" iconPath={clockIcon} />
        <RectangleIcon title="+ EFICIENTE" iconPath={shieldVerified} />
            </Carousel>
        </div>
    );
}
