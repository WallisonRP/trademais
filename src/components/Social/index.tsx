import facebookLogo from "../../assets/icons/facebook.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
import discordLogo from "../../assets/icons/discord.svg";

export function Social() {
  return (
    <div className="text-3xl font-semibold text-white text-center">
      <span>Redes Sociais</span>
      <ul className="socialList flex justify-between mt-7">
        <li className="bg-[#FFBD08] grid place-items-center py-4 px-6 rounded-full mr-5">
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
            <img className="w-10" src={instagramLogo} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
