import { IconButton } from "../IconButton";
import emailIcon from "../../assets/icons/email.svg";

export function Contacts() {
  return (
    <div className="text-white text-center flex flex-col place-items-center">
      <p className="lg:text-2xl md:text-lg text-base font-semibold lg:mb-5 md:mb-2">Contatos</p>
      <IconButton buttonFixed={false} buttonTop={false} marginRight={0} />
      <span className="flex items-center lg:text-xl md:text-base lg:mt-4 md:mt-2">
        <img className="lg:mr-3 md:mr-1 lg:w-6 md-w-1" src={emailIcon} alt="" />
        <a href="">trademaisoficial@gmail.com</a>
      </span>
    </div>
  );
}
