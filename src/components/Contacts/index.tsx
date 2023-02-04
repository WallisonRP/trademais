import { IconButton } from "../IconButton/indes";
import emailIcon from "../../assets/icons/email.svg";

export function Contacts() {
  return (
    <div className="text-white text-center grid place-items-center">
      <span className="text-3xl font-semibold mb-7">Contatos</span>
      <IconButton buttonFixed={false} buttonTop={false} />
      <span className="flex items-center text-xl mt-4">
        <img className="mr-3 w-6" src={emailIcon} alt="" />
        <a href="">trademaisoficial@gmail.com</a>
      </span>
    </div>
  );
}
