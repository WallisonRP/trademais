import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ClientCard } from "../ClientCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots
      centerMode
      autoPlay
      autoPlaySpeed={1000}
      infinite
    >
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />

      <ClientCard
        name={clientModel[0].name}
        profilePictureUrl={clientModel[0].profilePictureUrl}
        content={clientModel[0].content}
      />
    </Carousel>

    // <div className="carousel-wrapper">
    //     <Carousel showArrows={true} showThumbs={false} showStatus={false} centerSlidePercentage={2  } centerMode >
    //     <ClientCard
    //   name={clientModel[0].name}
    //   profilePictureUrl={clientModel[0].profilePictureUrl}
    //   content={clientModel[0].content}
    // />
    // <ClientCard
    //   name={clientModel[1].name}
    //   profilePictureUrl={clientModel[1].profilePictureUrl}
    //   content={clientModel[1].content}
    // />
    // <ClientCard
    //   name={clientModel[2].name}
    //   profilePictureUrl={clientModel[2].profilePictureUrl}
    //   content={clientModel[2].content}
    // />
    // <ClientCard
    //   name={clientModel[3].name}
    //   profilePictureUrl={clientModel[3].profilePictureUrl}
    //   content={clientModel[3].content}
    // />
    // <ClientCard
    //   name={clientModel[2].name}
    //   profilePictureUrl={clientModel[2].profilePictureUrl}
    //   content={clientModel[2].content}
    // />
    // <ClientCard
    //   name={clientModel[3].name}
    //   profilePictureUrl={clientModel[3].profilePictureUrl}
    //   content={clientModel[3].content}
    // />
    // <ClientCard
    //   name={clientModel[2].name}
    //   profilePictureUrl={clientModel[2].profilePictureUrl}
    //   content={clientModel[2].content}
    // />
    // <ClientCard
    //   name={clientModel[3].name}
    //   profilePictureUrl={clientModel[3].profilePictureUrl}
    //   content={clientModel[3].content}
    // />

    //     </Carousel>
    // </div>
  );
}
