import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import React from "react";
import Slider from "react-slick";

import person1 from "/person-1.jpg";
import person2 from "/person-2.jpg";
import person3 from "/person-3.jpg";
import person4 from "/person-4.jpg";
import { ClientCard } from "../ClientCard";

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

const FooterCarousel = () => {
  const settings = {
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 300,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 5,
    initialSlide: 3,
    center: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider className="" {...settings}>
      {clientModel.map((client, index) => (
        <ClientCard
        name={client.name}
        profilePictureUrl={client.profilePictureUrl}
        content={client.content}
      />
      ))}
    </Slider>
  );
};

export default FooterCarousel;
