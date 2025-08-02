// images
import Image from "next/image";
import ReuNegoc from "./assets/reuniao_de_negocios.jpeg";
import HandsTogether from "./assets/handsTogether.jpeg";
// icons
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/cards/Card";
import MapComponent from "./components/MapComponent";
import SmallPlan from "./components/iconPlans/SmallPlan";
import MdPlan from "./components/iconPlans/MdPlan";
import LifeInsurance from "./components/iconPlans/LifeInsurance";
import DentalPlan from "./components/iconPlans/DentalPlan";

export default function Home() {
  const Maps_API_KEY = process.env.NEXT_PUBLIC_Maps_API_KEY || "";
  return (
    <div className="body">
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* --- Seção 1: Introdução Inicial --- */}
        <section id="inicio" className=" w-full h-[100vh] pt-[160px]">
          <div className="mx-auto w-full max-w-[1280px] h-full flex flex-col items-center justify-center  px-4">
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-full bg-[var(--background-color-gray-opacity)] flex items-center justify-center">
                <p className="text-justify text-lg text-[var(--text-color-white)] p-6">
                  A <b>Tipan</b> tem como objetivo oferecer atendimento
                  diferenciado as empresas na gestão de pacote de benefícios
                  relacionados a seguros.
                  <br />
                  <br />
                  Desde sua fundação, a Tipan manteve a característica de
                  conhecer integralmente a cultura de cada empresa visando
                  atender com excelência as necessidades de cada cliente.
                  <br />
                  <br />
                  Para nós, <b>PARCERIA só tem data de início.</b>
                </p>
              </div>
              <div className="w-1/2 h-full hidden md:block"></div>
            </div>
          </div>
        </section>
        {/* --- Seção 2: Empresa --- */}
        <section
          id="empresa"
          className="bg-[var(--background-color-off-white)] w-full scroll-mt-[170px]"
        >
          <div className="mx-auto w-full max-w-[1280px] h-full flex flex-row items-center px-4">
            <div className="flex text-[var(--text-color-black)] h-full w-full md:w-[50%] p-6">
              <div className="flex items-start pt-10">
                <div className="vertical-line--blue"></div>
                <div className="flex flex-col gap-5">
                  <h4 className="h4--blue">A Empresa</h4>
                  <h5 className="text-[var(--text-color-title-red)] text-[25px] font-bold">
                    Desde 1996
                  </h5>
                  <p>
                    Fundada em 1996, a TIPAN consolidou reputação no mercado de
                    seguros, através de atendimento adaptativo, focado no perfil
                    e nas necessidades de cada cliente.
                    <br />
                    <br />
                    Atuando de forma transparente e ética, comunicando de forma
                    clara e objetiva, construímos relacionamentos de longo
                    prazo, que impulsionam nossas vendas, através de indicações
                    e recomendações.
                    <br />
                    <br />
                    Com constantes investimentos em tecnologia e em pessoas,
                    realizamos continuamente adaptações de nossos serviços, afim
                    de atendermos nossos clientes com excelência e acompanharmos
                    as mudanças e a evolução tecnológica do mercado.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-full hidden md:block">
              <Image
                src={ReuNegoc}
                alt="Reunião de Negócios"
                className="object-cover w-[100%] h-[100%]"
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        {/* --- Seção 3: Equipe --- */}
        <section
          id="equipe"
          className="w-full bg-[var(--background-color-blue)] scroll-mt-[170px]"
        >
          <div className="mx-auto w-full max-w-[1280px] h-full flex flex-row items-center text-[var(--text-color-title-white)] px-4">
            <div className="flex h-full w-full md:w-[50%] p-6">
              <div className="flex items-start">
                <div className="vertical-line--white"></div>
                <div className="flex flex-col justify-center gap-24">
                  <h4 className="h4--white">Equipe</h4>
                  <p>
                    Os planos de saúde e odontológicos são fortemente regulados.
                    A edição frequente de Normas, visa atender as necessidades
                    do mercado e adequar as coberturas obrigatórias à
                    jurisprudência e à evolução da medicina.
                    <br />
                    <br />
                    Essa dinâmica regulatória nos direciona a investimentos e
                    treinamentos para atualização de nossa equipe, o que
                    contribuiu para prestação de serviço com excelência.
                    <br />
                    <br />
                    Nossos colaboradores são diferenciados e preparados para as
                    mudanças, para acompanharem a evolução regulatória e
                    tecnológica do mercado, que altera constantemente nossa
                    forma de atuar, bem como os direitos e obrigações de nossos
                    clientes.
                    <br />
                    <br />
                    Conhecimento, resiliência, empatia e ética são a base de
                    nossa equipe.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[50%] h-full hidden md:block">
              <Image
                src={HandsTogether}
                alt="Reunião de Negócios"
                className="object-cover w-[100%] h-[100%]"
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        {/* --- Seção 4: Produtos --- */}
        <section
          id="produtos"
          className="bg-[var(--background-color-off-white)] text-[var(--text-color-black)] w-full scroll-mt-[170px] py-20"
        >
          <div className="mx-auto w-full max-w-[1280px] flex flex-col px-4">
            {/* Título da Seção */}
            <div className="flex items-start mb-12">
              <div className="vertical-line--blue"></div>
              <h4 className="h4--blue ml-4">Produtos</h4>
            </div>

            {/* Container do Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                icon={<SmallPlan />}
                title="Planos de Saúde"
                subtitle="Pequenas Empresas"
                description={[
                  `Nossa experiência e transparência apoiam pequenas empresas na contratação e utilização de um plano de saúde que atende às necessidades dos sócios e seus colaboradores.`,
                  `Muitas pessoas enfrentam dificuldades para utilizar o plano de saúde, não encontram quem esclareça seus direitos, bem como explique os processos e caminhos para utilização.`,
                  `Nosso suporte pós-vendas, exclusivo para nossos clientes, otimiza a utilização dos planos e serviços contratados, visando facilitar a utilização.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#ffffff"
              />
              <Card
                icon={<MdPlan  />}
                title="Planos de Saúde"
                subtitle="Médias e Grandes Empresas"
                description={[
                  `Além do entendimento do benefício contratado, as médias e grandes empresas se deparam com o desafio de maximizar os benefícios com os recursos financeiros disponíveis.`,
                  `Nossa experiência, consolidada ao longo desses anos de atuação, nos diferencia para apoiar nossos clientes nas negociações.`,
                  `Buscamos otimizar o benefício disponibilizado aos colaboradores de forma personalizada, considerando o perfil populacional e de utilização, o orçamento e as necessidades específicas da empresa e seus colaboradores.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#1f3149"
              />
              <Card
                icon={<LifeInsurance className="text-[60px] " />}
                title="Seguro de Vida"
                subtitle="Empresarial"
                description={[
                  `O seguro de vida é um benefício importante, que garante à família do colaborador tranquilidade em caso de evento coberto.`,
                  `Para a empresa, é uma ferramenta de retenção e sua contratação tranquiliza a todos em momentos de grande fragilidade emocional.`,
                  `Apoiamos as empresas para a correta contratação e divulgação do benefício.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#1f3149"
              />
              <Card
                icon={<DentalPlan  />}
                title="Plano Odontológico"
                subtitle="Empresarial"
                description={[
                  `Apoiamos nossos clientes na escolha e gestão do plano odontológico, benefício de baixo custo, onde as empresas habitualmente são facilitadoras do acesso.`,
                  `O plano odontológico visa garantir acesso à saúde bucal aos colaboradores da empresa.`,
                  `A contratação deve considerar o custo e a facilidade de utilização.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#ffffff"
              />
            </div>
          </div>
        </section>
        {/* --- Seção 5: Princípios --- */}
        <section
          id="principios"
          className="w-full bg-[var(--background-color-blue)] pl-9 scroll-mt-[170px]"
        >
          <div className="mx-auto w-full max-w-[1280px] min-h-[75vh] flex flex-col justify-center px-4">
            <div className="flex items-start">
              <div className="vertical-line--white"></div>
              <div className="flex flex-col justify-center gap-24">
                <h4 className="h4--white">Princípios</h4>
                <div>
                  <p className="mb-8">
                    Não consideramos mérito; nossa premissa é que empresas são
                    obrigadas a aplicar políticas:
                  </p>
                  <ul className="list-disc pl-6 ">
                    <li>de Compliance Corporativo</li>
                    <li>Anti Corrupção</li>
                    <li>
                      Anti Terrorismo e adotar ações contra Lavagem de Dinheiro
                    </li>
                    <li>Governança e boas práticas contábeis</li>
                    <li>Sustentabilidade</li>
                    <li>Respeito a LGPD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- Seção 6: Contato --- */}
        <section
          id="contato"
          className="w-full h-[600px] bg-[var(--background-color-off-white)] scroll-mt-[170px]"
        >
          <div className="mx-auto w-full max-w-[1280px] h-full flex flex-row text-[var(--text-color-title-blue)] px-4 mt-[77px]">
            <div className="flex  h-full w-full md:w-[50%] p-6">
              <div className="flex items-start">
                <div className="vertical-line--blue"></div>
                <div className="flex flex-col justify-center gap-4">
                  <h4 className="h4--blue">Contato</h4>
                  <div className="flex flex-col my-10">
                    <p className="text-[var(--text-color-blue)] text-[18px] mb-7">
                      Entre em contato conosco ou agende um call para falarmos
                      melhor.
                    </p>
                    <a
                      href="https://wa.me/551199999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-5"
                    >
                      <span className="text-[var(--text-color-blue)] text-[18px] flex gap-4">
                        <FaWhatsapp className="text-[25px]" />
                        (11)99999-9999
                      </span>
                    </a>
                    <div className="mb-10 flex flex-col gap-5">
                      <span className="text-[var(--text-color-blue)] text-[18px] flex gap-4">
                        <FaPhoneAlt className="text-[25px]" />
                        (11)59999-9999
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[var(--text-color-gray)] text-[23px]/[32.2px] font-bold">
                      Agende sua call
                    </h5>
                    <p>
                      Informe um horário de preferência e agende um call com
                      nossos especialistas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] h-auto hidden md:block">
              <div className="maps w-[350px] h-[400px] mt-[77px] mx-auto">
                <div className="w-full h-full  min-h-[400px]">
                  <MapComponent apiKey={Maps_API_KEY} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
