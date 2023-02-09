import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
import discordLogo from "../../assets/icons/discord.svg";
import { SocialIcon } from "../SocialIcon";
import { LogoFacebook, LogoInstagram, LogoTwitter, Mail } from "react-ionicons";


export function Social() {
  return (
    <div className="text-white text-center grid place-items-center">
      <span className="lg:text-2xl md:text-xl text-base font-semibold">Redes Sociais</span>
      <ul className="socialList flex justify-center gap-3 lg:mt-4 mt-2">
        <SocialIcon
          icon={<LogoFacebook />}
          link="/"
          paddingX={6}
          iconSize={8}
          paddingY={4}
        />
        <SocialIcon
          icon={<LogoInstagram />}
          link="/"
          paddingX={4}
          iconSize={10}
          paddingY={4}
        />
        <SocialIcon
          icon={<LogoTwitter />}
          link="/"
          paddingX={4}
          iconSize={10}
          paddingY={4}
          // paddingX={4}
          // iconSize={10}
          // paddingY={4}
        />
        <div className="md:hidden">
        <SocialIcon
          icon={<Mail />}
          link="/"
          paddingX={4}
          iconSize={10}
          paddingY={4}
          // paddingX={4}
          // iconSize={10}
          // paddingY={4}
        />
        </div>
        {/* <li className="bg-[#FFBD08] grid place-items-center py-4 px-6 rounded-full mr-5">
          <a href="">
            <img src={facebookLogo} alt="" />
          </a>
        </li>
        <li className="bg-[#FFBD08] grid place-items-center py-4 px-4 rounded-full mr-5">
          <a href="">
            <img className="w-10" src={discordLogo} alt="" />
          </a>
        </li>
        <li className="bg-[#FFBD08] grid place-items-center py-4 px-4 rounded-full">
          <a href="">
            <img className="w-4" src={instagramLogo} alt="" />
          </a>
        </li> */}
      </ul>
    </div>
  );
}
