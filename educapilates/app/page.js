"use client";

import { useState } from "react";

const phone = "5515996661992";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Educa+Pilates%2C+Av.+Padre+Ant%C3%B4nio+Brunetti%2C+1527%2C+Itapetininga%2C+SP";

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    heart: (
      <>
        <path d="M20.8 8.8c0 5.5-8.8 10.3-8.8 10.3S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
      </>
    ),
    leaf: (
      <>
        <path d="M20.5 3.5C12 4 5.4 8.1 5.4 14.3c0 3.4 2.5 5.7 5.8 5.7 6.2 0 8.4-7.1 9.3-16.5Z" />
        <path d="M4 21c2.5-4.8 6.1-8.2 11.2-10.8" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    whatsapp: (
      <>
        <path
          d="M20.8 3.5C16.1 3.5 12.1 5 8.8 8.3A14.4 14.4 0 0 0 4.2 20.7L1.8 29l8.2-2.4c2.6 1.2 5.4 1.8 8.3 1.8h.1c7.8 0 14.1-6.3 14.1-14.1 0-3.8-1.5-7.4-4.1-10S24.7 3.5 20.8 3.5zM19.5 24.4c-1.4 0-2.8-.4-4-.9l-.7-.4-4.7 1.4 1.4-4.6-.4-.7c-1.9-3.1-1.6-6.8.8-9.2 1.3-1.4 3-2.1 4.8-2.1 3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1zm4.1-6.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.7.9-.9 1.1-.1.2-.3.2-.5.1-.9-.4-1.8-1-2.5-1.7-.7-.8-1.2-1.8-1.3-2.2-.1-.4.1-.6.3-.7l.4-.4c.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.1-.4-.2-.7-.1-.3-.6-1.5-.8-2.1-.2-.5-.4-.4-.7-.4h-.5c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 2 0 1.2.8 2.4 1 2.7.2.3 1.9 3 4.7 4.2.7.3 1.2.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.2-.2-.4-.3z"
          fill="currentColor"
        />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function YogaMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="52" fill="url(#yogaGlow)" opacity="0.22" />
      <circle cx="60" cy="60" r="44" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
      <path d="M60 24C54 30 49 36.5 46 45C42 54 41 62.8 44 70.8C47.2 79.4 55.2 85 60 85C64.8 85 72.8 79.4 76 70.8C79 62.8 78 54 74 45C71 36.5 66 30 60 24Z" fill="currentColor" opacity="0.12" />
      <path d="M60 29C48.5 29 39.5 38 39.5 49.5C39.5 61 48.5 70 60 70C71.5 70 80.5 61 80.5 49.5C80.5 38 71.5 29 60 29Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 27V17M60 93V103M27 60H17M103 60H93M34 34L27 27M93 93L100 100M34 86L27 93M93 27L100 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M60 49C54 49 49 53.4 49 59.5C49 66.5 54.5 71.5 60 71.5C65.5 71.5 71 66.5 71 59.5C71 53.4 66 49 60 49Z" fill="currentColor" opacity="0.22" />
      <path d="M60 39C68 39 74 45.7 74 53.5C74 61.3 68.2 68 60 68C51.8 68 46 61.3 46 53.5C46 45.7 52 39 60 39Z" stroke="currentColor" strokeWidth="3" />
      <path d="M52 76C55.5 80.5 57.5 84.5 60 92C62.5 84.5 64.5 80.5 68 76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47 70C51.2 73.6 55.5 75.8 60 75.8C64.5 75.8 68.8 73.6 73 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="yogaGlow" x1="24" y1="17" x2="94" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D88BB6" />
          <stop offset="1" stopColor="#8A4F7F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <YogaMark className="brandMark" />
            <span>
              <strong>educa</strong>
              <em>Pilates</em>
            </span>
          </a>

          <button
            className="menuButton"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>

          <nav className={`navLinks ${open ? "open" : ""}`}>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#experiencia" onClick={closeMenu}>Experiência</a>
            <a href="#horarios" onClick={closeMenu}>Horários</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="navCta" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Fale conosco
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">
              <span className="dot" />
              Pilates em Itapetininga
            </div>
            <h1>
              Movimento que
              <span>cuida de você.</span>
            </h1>
            <p>
              Um espaço pensado para você desacelerar, se movimentar com
              consciência e encontrar mais equilíbrio no dia a dia.
            </p>
            <div className="heroActions">
              <a className="button primary" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">
                Agende seu atendimento <Icon name="arrow" />
              </a>
              <a className="button ghost" href="#sobre">
                Conheça o estúdio
              </a>
            </div>
            <div className="heroMeta">
              <div><Icon name="heart" /><span>Bem-estar</span></div>
              <div><Icon name="leaf" /><span>Equilíbrio</span></div>
              <div><Icon name="spark" /><span>Movimento consciente</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="photoCard">
              <img src="/fachada.jpg" alt="Fachada da Educa Pilates" />
              <div className="photoCaption">
                <span>Educa Pilates</span>
                <small>Vila Rio Branco · Itapetininga/SP</small>
              </div>
            </div>
            <div className="floatingCard">
              <span className="miniIcon"><Icon name="heart" /></span>
              <div>
                <strong>Seu tempo.</strong>
                <small>Seu movimento.</small>
              </div>
            </div>
          </div>
        </div>
        <a className="scrollHint" href="#sobre" aria-label="Ir para a seção Sobre">
          <span />
        </a>
      </section>

      <section id="sobre" className="section about">
        <div className="container twoColumns">
          <div className="sectionHeading">
            <div className="titleCluster">
              <div className="aboutBadge">
                <YogaMark className="aboutMark" />
              </div>
              <span className="kicker">Sobre a Educa Pilates</span>
            </div>
            <h2>Um lugar para <i>se cuidar</i> com calma.</h2>
          </div>
          <div className="aboutText">
            <p className="lead">
              A Educa Pilates é um estúdio de Pilates localizado em
              Itapetininga, com uma proposta acolhedora e leve para quem
              deseja colocar o movimento e o bem-estar na rotina.
            </p>
            <p>
              Aqui, cada momento pode ser uma pausa para respirar, perceber o
              corpo e construir uma relação mais consciente com o movimento.
            </p>
            <a className="textLink" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">
              Quero conhecer <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section experience">
        <div className="container">
          <div className="centerHeading">
            <span className="kicker">A experiência</span>
            <h2>Mais que exercício.<br /><i>Um momento para você.</i></h2>
            <p>
              Uma identidade visual suave para traduzir a atmosfera do estúdio:
              feminina, limpa, acolhedora e contemporânea.
            </p>
          </div>

          <div className="featureGrid">
            <article className="featureCard">
              <div className="featureIcon"><Icon name="heart" /></div>
              <span>01</span>
              <h3>Bem-estar</h3>
              <p>Reserve um espaço na rotina para cuidar de si e do seu corpo.</p>
            </article>
            <article className="featureCard featured">
              <div className="featureIcon"><Icon name="leaf" /></div>
              <span>02</span>
              <h3>Equilíbrio</h3>
              <p>Movimente-se com mais atenção, presença e leveza.</p>
            </article>
            <article className="featureCard">
              <div className="featureIcon"><Icon name="spark" /></div>
              <span>03</span>
              <h3>Consciência</h3>
              <p>Perceba o movimento e transforme pequenos hábitos em cuidado.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <div className="container quoteInner">
          <div className="quoteMark">“</div>
          <p>
            Cuidar do corpo também é uma forma de cuidar da vida.
          </p>
          <span>EDUCA PILATES</span>
        </div>
      </section>

      <section id="horarios" className="section info">
        <div className="container infoGrid">
          <div>
            <span className="kicker">Visite o estúdio</span>
            <h2>Estamos em <i>Itapetininga.</i></h2>
            <p className="infoLead">
              Fácil de encontrar na Vila Rio Branco. Consulte a disponibilidade
              e entre em contato para combinar seu atendimento.
            </p>

            <div className="infoList">
              <div className="infoItem">
                <div className="infoIcon"><Icon name="pin" /></div>
                <div>
                  <small>Endereço</small>
                  <strong>Av. Padre Antônio Brunetti, 1527</strong>
                  <span>Vila Rio Branco · Itapetininga/SP · 18208-080</span>
                </div>
              </div>
              <div className="infoItem">
                <div className="infoIcon"><Icon name="clock" /></div>
                <div>
                  <small>Horário informado</small>
                  <strong>Segunda a sexta · 07:00 às 20:00</strong>
                  <span>Confirme o horário do seu atendimento pelo WhatsApp.</span>
                </div>
              </div>
              <div className="infoItem">
                <div className="infoIcon"><Icon name="phone" /></div>
                <div>
                  <small>Contato</small>
                  <strong>(15) 99666-1992</strong>
                  <span>Atendimento pelo WhatsApp.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mapCard">
            <div className="mapPattern">
              <div className="mapPin"><Icon name="pin" /></div>
              <div className="mapCircle circleA" />
              <div className="mapCircle circleB" />
              <div className="mapRoad roadA" />
              <div className="mapRoad roadB" />
            </div>
            <div className="mapOverlay">
              <span>Educa Pilates</span>
              <strong>Vila Rio Branco</strong>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Abrir no Google Maps <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="ctaSection">
        <div className="container ctaBox">
          <div>
            <span className="kicker">Vamos conversar?</span>
            <h2>Seu próximo passo pode começar <i>hoje.</i></h2>
            <p>Entre em contato com a Educa Pilates e consulte os horários disponíveis.</p>
          </div>
          <a className="button white" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">
            Falar pelo WhatsApp <Icon name="arrow" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <YogaMark className="footerMark" />
            <div>
              <strong>educa <span>Pilates</span></strong>
              <small>Movimento, equilíbrio e bem-estar.</small>
            </div>
          </div>
          <p>© {new Date().getFullYear()} Educa Pilates · Itapetininga/SP</p>
        </div>
      </footer>

    </main>
  );
}
