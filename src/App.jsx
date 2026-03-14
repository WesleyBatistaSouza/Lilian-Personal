import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Phone,
  Award,
  Users,
  Target,
  TrendingUp,
  ChevronDown,
  DownloadCloudIcon,
} from "lucide-react";

export default function LilianRangelPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "sobre", "servicos", "resultados", "contato"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Treino Personalizado",
      description:
        "Programas de treino desenvolvidos especificamente para seus objetivos e necessidades individuais.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Acompanhamento Nutricional",
      description:
        "Orientação nutricional personalizada para potencializar seus resultados e melhorar sua saúde.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Avaliação Física",
      description:
        "Avaliações completas para monitorar sua evolução e ajustar seu programa de treino.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Consultoria Online",
      description:
        "Acompanhamento remoto com treinos e suporte para você treinar onde estiver.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 15kg em 6 meses",
      text: "A Lilian transformou completamente minha relação com exercícios. Hoje me sinto mais saudável e confiante!",
    },
    {
      name: "João Santos",
      result: "Ganho de 8kg de massa muscular",
      text: "Treinamento focado e resultados reais. Nunca imaginei que conseguiria chegar nesse shape!",
    },
    {
      name: "Ana Paula",
      result: "Melhorou disposição e saúde",
      text: "Além dos resultados físicos, melhorei minha saúde geral. Recomendo demais o trabalho da Lilian!",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold"><img src="./public/lilian_icon.png"></img></span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  Lilian Rangel
                </h1>
                <p className="text-xs text-cyan-400">Personal Trainer</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "sobre", "servicos", "resultados", "contato"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                      activeSection === item
                        ? "text-cyan-400 font-semibold"
                        : "text-white"
                    }`}
                  >
                    {item === "servicos" ? "Serviços" : item}
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-sm border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {["home", "sobre", "servicos", "resultados", "contato"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 text-lg hover:text-cyan-400 transition-colors"
                  >
                    {item === "servicos" ? "Serviços" : item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-8 flex items-center justify-center w-full">
            <img
              src="./assets/logo_lilian.png"
              alt="Lilian Rangel Logo"
              className="w-70 h-90 object-cover drop-shadow-2xl animate-float"
            />
            {/* <h2 className='text-center  animate-float'>Lilian Rangel</h2> */}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Transforme Seu Corpo
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Alcance seus objetivos com treinos personalizados e acompanhamento
            profissional
          </p>
          <p className="text-lg text-cyan-400 mb-12">CREF: 055635-RJ</p>

          <button
            onClick={() => scrollToSection("contato")}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Agende Sua Avaliação
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Olá! Sou a{" "}
                <span className="text-cyan-400 font-semibold">
                  Lilian Rangel
                </span>
                , personal trainer certificada pelo CREF 055635-RJ, dedicada a
                ajudar pessoas a alcançarem seus objetivos de saúde e fitness.
              </p>
              <p>
                Com anos de experiência, desenvolvo programas de treinamento
                personalizados que respeitam as limitações e potencializam as
                capacidades de cada aluno.
              </p>
              <p>
                Minha missão é transformar vidas através do exercício físico,
                promovendo não apenas mudanças estéticas, mas principalmente
                saúde, bem-estar e autoconfiança.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Alunos Transformados" },
                { number: "8+", label: "Anos de Experiência" },
                { number: "95%", label: "Taxa de Satisfação" },
                { number: "100%", label: "Dedicação" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Soluções completas para sua jornada fitness
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section
        id="resultados"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Veja o que meus alunos têm a dizer
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full mx-auto mb-4">
                    <span className="text-2xl font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-center text-white mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-cyan-400 text-center font-semibold mb-4">
                    {testimonial.result}
                  </p>
                </div>
                <p className="text-gray-400 italic text-center">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Vamos Começar?
            </span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Entre em contato e agende sua avaliação gratuita
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://wa.me/5522999343388"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-lg">(22) 99934-3388</p>
            </a>

            <a
              href="https://instagram.com/lilisrangel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/20"
            >
              <Instagram className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-lg">@lilisrangel</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/20">
            <p className="text-gray-300 text-lg mb-4">
              Estou pronta para ajudar você a alcançar seus objetivos!
            </p>
            <p className="text-cyan-400 font-semibold">CREF: 055635-RJ</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
        <div className="max-w-7xl mx-auto text-center flex items-center justify-center flex-col gap-3">

          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
             <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent flex items-center justify-center flex-col">
              
            Baixe um exemplar de treino aqui!
            </span>
            </h2>
           
            <a download href="./file/Cronograma_Lilian.xlsx" className="bg-gradient-to-br text-center items-center justify-center flex gap-2 text-4xl cursor-pointer px-6 py-1 from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full transition-all duration-300 transform hover:scale-105">Planilha de Treino <DownloadCloudIcon /></a>
        </div>
          
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Lilian Rangel Personal Trainer. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">CREF: 055635-RJ</p>
          <div>
            <br />
            <p>Criado por: <a href="https://www.instagram.com/wes_souz4" target="_blank">@Wesley Batista</a></p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
