import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";

interface IconButtonProps {
  buttonFixed: boolean;
  buttonTop: boolean;
}

export function IconButton({ buttonFixed, buttonTop}: IconButtonProps) {
  return (
    <button
      className={`md:py-2 md:px-3 px-3 py-3 md:flex bg-[#FFBD08] text-black rounded-3xl font-audiowide text-xl md:static ${
        buttonFixed ? "fixed bottom-[4vh] z-10 right-4" : ""
      } `}
    >
      <span
        className={`mr-2 lg:text-base md:text-xs md:block ${
          buttonTop ? "hidden" : "block"
        }`}
      >
        Whatsapp
      </span>
      <img className="lg:w-6 md:w-4" src={whatsappIcon} alt="" />
    </button>
  );
}
