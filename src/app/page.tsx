"use client";
// images
import Image from "next/image";
import ReuNegoc from "./assets/reuniao_de_negocios.jpeg";
import HandsTogether from "./assets/handsTogether.jpeg";
// icons
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/cards/Card";
import FloatingButton from "./components/FloatingButton";
import SmallPlan from "./components/iconPlans/SmallPlan";
import MdPlan from "./components/iconPlans/MdPlan";
import LifeInsurance from "./components/iconPlans/LifeInsurance";
import DentalPlan from "./components/iconPlans/DentalPlan";
//hooks
import useWhatsappLink from "./hooks/useWhatsappLink";

export default function Home() {
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
                  A <b>Tipan</b> tem como objetivo oferecer um atendimento
                  diferenciado às empresas na gestão de pacotes de benefícios
                  relacionados a seguros.
                  <br />
                  <br />
                  Desde sua fundação, a Tipan mantém a característica de
                  conhecer integralmente a cultura de cada empresa, visando
                  atender com excelência às necessidades de cada cliente.
                  <br />
                  <br />
                  Para nós, <b>PARCERIA só tem data de início!</b>
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
                  <h4 className="h4--blue mb-4">A Empresa</h4>
                  <h5 className="text-[var(--text-color-title-blue)] text-[25px] font-bold">
                    Desde 1996
                  </h5>
                  <p>
                    Fundada em 1996, a TIPAN consolidou reputação no mercado de
                    seguros, através de atendimento adaptativo, focado no perfil
                    e nas necessidades de cada cliente.
                    <br />
                    <br />
                    Atuando com transparência, ética e com uma comunicação clara
                    e objetiva, construímos relacionamentos de longo prazo que
                    impulsionam nossas vendas através de indicações e
                    recomendações.
                    <br />
                    <br />
                    Com constantes investimentos em tecnologia e em pessoas,
                    realizamos adaptações nossos serviços, a fim de atender
                    nossos clientes com excelência e as mudanças e a evolução
                    tecnológica do mercado.
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
                priority
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
                    A edição frequente de normas visa atender às necessidades do
                    mercado e adequar as coberturas obrigatórias à
                    jurisprudência e à evolução da medicina.
                    <br />
                    <br />
                    Essa dinâmica regulatória nos direciona a investimentos e
                    treinamentos para a atualização de nossa equipe, o que
                    contribui para a prestação de serviços com excelência.
                    <br />
                    <br />
                    Nossos colaboradores são diferenciados e preparados para
                    acompanhar as mudanças, adaptando-se à evolução regulatória
                    e tecnológica do mercado, que constantemente transforma
                    nossa forma de atuar, bem como os direitos e obrigações de
                    nossos clientes.
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
                priority
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
                  `Nossa experiência e transparência apoiam pequenas empresas na contratação e utilização de planos de saúde que atendem às necessidades dos sócios e de seus colaboradores.`,
                  `Muitas pessoas enfrentam dificuldades para utilizar o plano de saúde, seja por não encontrarem quem esclareça seus direitos ou por não terem acesso a explicações claras sobre os processos e caminhos de utilização.`,
                  `Nosso suporte pós-venda, exclusivo para clientes, otimiza o uso dos planos e serviços contratados, facilitando sua utilização.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="transparent"
              />
              <Card
                icon={<MdPlan />}
                title="Planos de Saúde"
                subtitle="Médias e Grandes Empresas"
                description={[
                  `Além de compreender o benefício contratado, as médias e grandes empresas se deparam com o desafio de maximizar os benefícios com os recursos financeiros disponíveis.`,
                  `Nossa experiência, consolidada ao longo desses anos de atuação, nos diferencia no apoio às negociações de nossos clientes.`,
                  `Buscamos otimizar os benefícios oferecidos aos colaboradores de forma personalizada, considerando o perfil populacional e de utilização, o orçamento e as necessidades específicas da empresa e de seus colaboradores.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#1f3149"
              />
              <Card
                icon={<LifeInsurance className="text-[35px] " />}
                title="Seguro de Vida"
                subtitle="Empresarial"
                description={[
                  `O seguro de vida é um benefício importante, que garante tranquilidade à família do colaborador em caso de evento coberto.`,
                  `Para a empresa, é uma ferramenta de retenção e sua contratação transmite segurança a todos em momentos de grande fragilidade emocional.`,
                  `Apoiamos as empresas na correta contratação e na adequada divulgação desse benefício.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="#1f3149"
              />
              <Card
                icon={<DentalPlan />}
                title="Plano Odontológico"
                subtitle="Empresarial"
                description={[
                  `Apoiamos nossos clientes na escolha e na gestão do plano odontológico, um benefício de baixo custo em que as empresas atuam, habitualmente, como facilitadoras do acesso.`,
                  `O plano odontológico visa garantir acesso à saúde bucal aos colaboradores da empresa.`,
                  `A contratação deve considerar o custo e a facilidade de utilização.`,
                ]}
                data-aos="flip-down"
                data-aos-delay="100"
                backgroundColor="transparent"
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
                    Não consideramos essas questões como mérito; nossa premissa
                    é de que as empresas são obrigadas a aplicar políticas de:
                  </p>
                  <ul className="list-disc pl-6 ">
                    <li>Compliance Corporativo</li>
                    <li>Anticorrupção</li>
                    <li>Antiterrorismo e ações contra Lavagem de Dinheiro</li>
                    <li>Governança e boas práticas contábeis</li>
                    <li>Sustentabilidade</li>
                    <li>Respeito à LGPD</li>
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
            <div className="flex  h-full w-full md:w-[100%] p-6">
              <div className="flex items-start">
                <div className="vertical-line--blue"></div>
                <div className="flex flex-col justify-center gap-4">
                  <h4 className="h4--blue">Contato</h4>
                  <div className="flex flex-col my-10">
                    <div className="w-full mb-10 md:w-[100%]">
                      <a
                        href={useWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 className="text-[var(--text-color-gray)] text-[23px]/[32.2px] font-bold">
                          Solicite uma conferência via web
                        </h5>

                        <p>Entre em contato conosco, seja nosso cliente.</p>
                      </a>
                    </div>
                    <a
                      href={useWhatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-5"
                    >
                      <span className="text-[var(--text-color-blue)] text-[18px] flex gap-4">
                        <FaWhatsapp className="text-[25px]" />
                        (11) 9 8867-0660
                      </span>
                    </a>

                    <div className="mb-5 flex flex-col gap-5">
                      <span className="text-[var(--text-color-blue)] text-[18px] flex gap-4">
                        <FaPhoneAlt className="text-[25px]" />
                        (11) 5904-9200
                      </span>
                    </div>
                    <a
                      href="mailto:seuemail@suaempresa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-5"
                    >
                      <span className="text-[var(--text-color-blue)] text-[18px] flex items-center gap-4">
                        <FaEnvelope className="text-[25px]" />
                        comercial.web@tipan.com.br
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
