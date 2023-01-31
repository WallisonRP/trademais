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

export function Footer() {
  return (
    <footer className="px-[10%] pb-7 bg-[#121214] text-white ">
      <div className="flex justify-between font-medium">
        <span className="max-w-xl">
          <p className="text-[#BC9832] text-2xl mb-1">Depoimentos</p>
          <h1 className="text-5xl mb-8">
            A opinião de quem já utilizou nossos serviços
          </h1>
        </span>
        <p>Confira mais casos</p>
      </div>

      <div className="flex justify-evenly pt-20 pb-32">
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

      <img className="w-full" src={footerLine} alt="" />

      <div className="py-16 flex justify-between">
        <img className="w-60" src={logo} alt="" />
        <Social />
        <Contacts />
      </div>
      {/* <div className="custom-shape-divider-top-1675108744">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </footer>
  );
}
