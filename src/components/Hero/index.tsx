import { FilledButton } from "../FilledButton";

export function Hero() {
  return (
    <section className="lg:pt-16 md:pt-12 mt-4">
      <strong className="md:text-5xl text-3xl text-[#BC9832]">TradeMais</strong>
      <p className="xl:max-w-[50vw] md:font-medium text-xl md:mt-7 mt-3 lg:mb-14 mb-4">
        Seja bem-vindo ao nosso site de intermediação de venda de skins!
        <p className="block pt-3 pb-5 text-left">
          Comprar e vender skins através de nós significa que você não precisa
          se preocupar com fraudes ou problemas de segurança. Todas as
          transações são acompanhadas por nós, e fornecemos assistência completa
          durante todo o processo.
        </p>
      </p>
      <FilledButton title="SAIBA MAIS" />
    </section>
  );
}
