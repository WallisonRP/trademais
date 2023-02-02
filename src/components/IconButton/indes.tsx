import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";

export function IconButton() {
  return (
    <button className="md:py-2 md:px-3 px-3 py-3 flex bg-[#FFBD08] text-black rounded-3xl font-audiowide text-xl">
      <span className="mr-2 lg:text-base md:text-xs md:block hidden">
        Whatsapp
      </span>
      <img className="lg:w-6 md:w-4" src={whatsappIcon} alt="" />
    </button>
  );
}
