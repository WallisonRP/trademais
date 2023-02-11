import "./styles.css";
import howItWorksImage from "../../../assets/images/how-it-works1.png";
import howItWorksImage1 from "../../../assets/images/Group-86.png";
import howItWorksImage2 from "../../../assets/images/Group-87.png";
import { FilledButton } from "../../FilledButton";

export function HowItWorks() {
  return (
    <section className="relative bg-[#F6F6F6] md:px-[8%] px-[3%] pt-40 pb-10 mt-16 font-medium">
      <p className="text-[#BC9832] md:text-2xl text-lg mb-1">TradeMais</p>
      <h1 className="md:text-4xl text-2xl md:text-left text-center mb-8">Entenda como funciona todo o processo!</h1>
      
      <div className="flex flex-col justify-center place-items-center">
      <img className="max-w-full h-auto md:block hidden mt-32" src={howItWorksImage1} alt="howItWorksImage" />
      <img className="max-w-full h-auto md:hidden block" src={howItWorksImage2} alt="howItWorksImage" />
      <div className="md:mt-36 mt-16">
          <FilledButton title="Entre em contato" />
        </div>
      </div>


      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block md:w-[130%] w-[180%] h-[113px] overflow-hidden"
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

      {/* <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[201px] w-[350%]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
