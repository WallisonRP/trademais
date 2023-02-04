import { FilledButton } from "../../FilledButton";

import aboutUsImage from "../../../assets/images/about-us-image.png";

export function AboutUs() {
  return (
    <section className="mt-72 mb-44 flex px-[10%] justify-between">
      <div className="font-medium">
        <p className="text-[#BC9832] text-xl mb-1">TradeMais</p>
        <h1 className="text-5xl mb-8">Quem somos nós</h1>
        <div className="max-w-4xl mb-36 text-xl">
          <p className="mb-8">
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

        <FilledButton title="ENTRE EM CONTATO" />
      </div>

      <img className="h-[500px] md:block hidden" src={aboutUsImage} alt="" />
    </section>
  );
}
