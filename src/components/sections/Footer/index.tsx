import { ClientCard } from "../../ClientCard";
import "./styles.css";

import footerLine from "../../../assets/images/footer-line.svg";
import logo from "/logo-trade-mais.png";
import { Social } from "../../Social";
import { Contacts } from "../../Contacts";

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

const items = [
  <div key={1}>Item 1</div>,
  <div key={2}>Item 2</div>,
  <div key={3}>Item 3</div>,
  <div key={4}>Item 4</div>,
];

export function Footer() {
  return (
    <footer className="px-[10%] pt-32 pb-7 bg-[#121214] text-white relative">
      <div className="">
        <span className="flex justify-between items-center font-medium ">
          <p className="text-[#BC9832] md:text-2xl text-lg">Depoimentos</p>
          <p className="">Confira mais casos</p>
        </span>
        <h1 className="md:text-4xl text-xl md:text-left text-center mt-4 mb-8">
          A opinião de quem já utilizou nossos serviços
        </h1>
      </div>

      <div className=" justify-evenly pt-20 pb-32 md:flex hidden">
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
      </div>


      {/* <img className="w-full h-32" src={footerLine} alt="" /> */}

      <svg
        className="w-[100%] md:mb-16"
        height="11"
        viewBox="0 0 1415 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.5C79.5 -0.5 158 -0.5 236.5 5.5C315 11.5 393.5 11.5 472 5.5C550.5 -0.5 629 -0.5 707.5 5.5C786 11.5 864.5 11.5 943 5.5C1021.5 -0.5 1100 -0.5 1178.5 5.5C1257 11.5 1335.5 11.5 1414 5.5"
          stroke="#FFBD08"
          stroke-width="5"
        />
      </svg>

      {/* <div className="grid md:grid-flow-col lg:place-content-around md:place-items-start place-items-center"> */}
      <div className="flex md:justify-around md:flex-row flex-col md:items-start items-center">
        <img className="md:w-26 lg:w-40 w-20 my-3" src={logo} alt="" />
        <Social />
        <div className="md:block hidden">
          <Contacts />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[350%] h-[158px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-violet-300"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
