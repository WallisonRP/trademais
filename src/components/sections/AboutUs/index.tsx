import { FilledButton } from "../../FilledButton";

import aboutUsImage from "../../../assets/images/about-us-image.png";

export function AboutUs() {
  return (
    <section className="md:mt-72 mt-24 flex md:px-[10%] px-[3%] justify-between">
      <div>
        <p className="text-[#BC9832] text-xl mb-1 font-medium">TradeMais</p>
        <h1 className="md:text-5xl text-3xl font-bold md:mb-8 mb-3">
          Quem somos nós
        </h1>
        <div className="max-w-4xl md:mb-36 mb-6 text-xl md:text-left text-justify">
          <p className="md:mb-8 mb-4">
            Temos orgulho de oferecer o serviço de intermediação de compra e
            venda de skins de excelente qualidade. Nossa equipe trabalha duro
            para garantir a sua segurança na hora de comprar aquele inventário
            dos sonhos!
          </p>
          <p>
            Nossa missão é garantir a satisfação e tranquilidade durante todo o
            processo de compra e venda. Estamos sempre trabalhando para melhorar
            a experiência, conforto e, principalmente, a segurança dos nossos
            clientes.
          </p>
        </div>

        <div className="mx-auto">
          <FilledButton title="SAIBA MAIS" />
        </div>
      </div>

      <img className="h-[500px] md:block hidden" src={aboutUsImage} alt="" />
    </section>
  );
}
