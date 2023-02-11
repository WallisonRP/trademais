import { Hero } from "../../Hero";
// import { Navbar } from "../../Navbar";
// import "./styles.css";

import scrollIcon from "../../../assets/icons/arrow-next-setion.svg";
import shieldPlus from "../../../assets/icons/shield-plus.png";
import shieldVerified from "../../../assets/icons/shield-verified.png";
import clockIcon from "../../../assets/icons/clock.png";
import { RectangleIcon } from "../../RectangleIcon";
import { NavbarTest } from "../../NavbarTest";
import { HeroCarousel } from "../../HeroCarousel";

export function Header() {
  return (
    <header className="relative md:px-[8%] px-[3%] bg-[#121214] text-white pb-[20vh] bg-hero-pattern bg-cover bg-no-repeat bg-center">
      {/* <Navbar /> */}
      <NavbarTest />
      {/* <Example /> */}
      <Hero />

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block h-[114px] w-[187%]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      {/* <div className="custom-shape-divider-bottom">
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
      </div> */}

      <img
        src={scrollIcon}
        className="absolute sm:block hidden bottom-[8vh] md:w-6 w-5"
        alt=""
      />

      <div className="md:flex hidden absolute lg:right-[10vw] md:right-[4vw] -bottom-12 w-auto">
        <RectangleIcon title="+ SEGURO" iconPath={shieldPlus} />
        <RectangleIcon title="+ RAPIDO" iconPath={clockIcon} />
        <RectangleIcon title="+ EFICIENTE" iconPath={shieldVerified} />
      </div>

      <p className="sm:hidden font-bold text-3xl text-[#BC9832] text-center mt-28 mb-8">Diferenciais</p>
      <div className="sm:hidden flex justify-center">
        <HeroCarousel />
      </div>
    </header>
  );
}
