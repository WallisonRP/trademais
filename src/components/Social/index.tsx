import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
import discordLogo from "../../assets/icons/discord.svg";
import { SocialIcon } from "../SocialIcon";

export function Social() {
  return (
    <div className="md:text-3xl text-base font-semibold text-white text-center">
      <span>Redes Sociais</span>
      <ul className="socialList flex justify-center mt-7">
        <SocialIcon
          icon={facebookLogo}
          link="/"
          paddingX={6}
          iconSize={8}
          paddingY={4}
        />
        <SocialIcon
          icon={discordLogo}
          link="/"
          paddingX={4}
          iconSize={10}
          paddingY={4}
        />
        <SocialIcon
          icon={instagramLogo}
          link="/"
          paddingX={4}
          iconSize={10}
          paddingY={4}
        />
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
