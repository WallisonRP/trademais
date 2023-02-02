import { Hero } from "../../Hero";
// import { Navbar } from "../../Navbar";
import "./styles.css";

import scrollIcon from "../../../assets/icons/arrow-next-setion.svg";
import shieldPlus from "../../../assets/icons/shield-plus.png";
import shieldVerified from "../../../assets/icons/shield-verified.png";
import clockIcon from "../../../assets/icons/clock.png";
import { RectangleIcon } from "../../RectangleIcon";
import { NavbarTest } from "../../NavbarTest";

export function Header() {
  return (
    <header className="relative px-[8%] bg-[#121214] text-white pb-[25vh] bg-hero-pattern bg-cover bg-no-repeat bg-center">
      {/* <Navbar /> */}
      <NavbarTest />
      {/* <Example /> */}
      <Hero />

      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <img src={scrollIcon} className="absolute bottom-16" alt="" />
      <div className="flex absolute right-[10vw] -bottom-12 w-auto">
        <RectangleIcon title="+ SEGURO" iconPath={shieldPlus} />
        <RectangleIcon title="+ RAPIDO" iconPath={clockIcon} />
        <RectangleIcon title="+ EFICIENTE" iconPath={shieldVerified} />
      </div>
    </header>
  );
}
