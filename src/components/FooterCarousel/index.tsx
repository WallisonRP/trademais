import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ClientCard } from "../ClientCard";

import person1 from "/person-1.jpg";
import person2 from "/person-2.jpg";
import person3 from "/person-3.jpg";
import person4 from "/person-4.jpg";

const clientModel = [
    {
      name: "Hector Bonilha",
      profilePictureUrl: person1,
      content: "Ótimo serviço, rápido e eficiente!!",
    },
    {
      name: "Maria Luiza",
      profilePictureUrl: person2,
      content: "Ótimo serviço, rápido e eficiente!!",
    },
    {
      name: "Larissa Santos",
      profilePictureUrl: person3,
      content: "Ótimo serviço, rápido e eficiente!!",
    },
    {
      name: "Pedro Golçalves",
      profilePictureUrl: person4,
      content: "Ótimo serviço, rápido e eficiente!!",
    },
  ];


export function FooterCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} transitionTime={2} infiniteLoop centerMode centerSlidePercentage={12}>
            <ClientCard
          name={clientModel[0].name}
          profilePictureUrl={clientModel[0].profilePictureUrl}
          content={clientModel[0].content}
        />
        <ClientCard
          name={clientModel[1].name}
          profilePictureUrl={clientModel[1].profilePictureUrl}
          content={clientModel[1].content}
        />
        <ClientCard
          name={clientModel[2].name}
          profilePictureUrl={clientModel[2].profilePictureUrl}
          content={clientModel[2].content}
        />
        <ClientCard
          name={clientModel[3].name}
          profilePictureUrl={clientModel[3].profilePictureUrl}
          content={clientModel[3].content}
        />
        <ClientCard
          name={clientModel[2].name}
          profilePictureUrl={clientModel[2].profilePictureUrl}
          content={clientModel[2].content}
        />
        <ClientCard
          name={clientModel[3].name}
          profilePictureUrl={clientModel[3].profilePictureUrl}
          content={clientModel[3].content}
        />
        <ClientCard
          name={clientModel[2].name}
          profilePictureUrl={clientModel[2].profilePictureUrl}
          content={clientModel[2].content}
        />
        <ClientCard
          name={clientModel[3].name}
          profilePictureUrl={clientModel[3].profilePictureUrl}
          content={clientModel[3].content}
        />

            </Carousel>
        </div>
    );
}
