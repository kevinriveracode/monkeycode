import React from "react"
import ScrollUpButton from "react-scroll-up-button"
import SEO from "../../components/seo"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Advantages from "../../components/Advantages/Advantages"
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures"
import Examples from "../../components/Examples/Examples"
import PackContainer from "../../components/PackContainer/PackContainer"
import AllInOne from "../../components/AllInOne/"
import FormContact from "../../components/FormContact/"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"
import {Helmet} from "react-helmet"

export default function IndexPage({ pageContext }) {
  const baseUrlImages = "https://monkeycode.s3.eu-west-3.amazonaws.com/"
  const infoLanding = {
    titlePage: "Diseño web rápido, original y seguro | MonkeyCode",
    backgroundImage: "https://monkeycode.s3.eu-west-3.amazonaws.com/banntienda.jpg",
    banner: {
      title: "DISEÑAMOS PÁGINAS WEB PROFESIONALES",
      subtitle:
        "Nuestros diseñadores crearán un diseño web enfocado a objetivos, para garantizar que sea completamente único para ti",
      buttonPrimary: {
        title: "Ver Precios",
        link: "#",
      },
      buttonSecondary: {
        title: "Escríbenos",
        link: "/contacto",
      },
      imageLink: `${baseUrlImages}bannerweb.svg`,
    },
    Advantages: {
      title: "¿Por qué debería contratar una página web?",
      subtitle:
        "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de facturación y un mayor público",
      advantages: [
        {
          title: "Imagen profesional",
          description:
            "Tener una página web te permite hacer publicidad y promocionar tu negocio con una exposición a nivel mundial gracias al gran alcance de internet.",
          url: `${baseUrlImages}mundo.svg`,
        },
        {
          title: "Fideliza a los clientes",
          description:
            "Estudia a tus clientes y crea una estrategia enfocada en fidelizar a nuevos clientes para tu negocio. Anima a tu publico a contactar con tu negocio.",
          url: `${baseUrlImages}fidelizar.svg`,
        },

        {
          title: "Amplía tu mercado",
          description:
            "Tener presencia en internet te ofrece la oportunidad de llegar a más clientes además de mejorar las oportunidades de negocio.",
          url: `${baseUrlImages}crecimiento.svg`,
        },
        {
          title: "Disponible 24 horas",
          description:
            "Tu sitio web estará disponible para proporcionar información las 24 horas del día en cualquier lugar del planeta.",
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/apoyo.svg`,
        },
        {
          title: "Herramienta de venta",
          description:
            "Es importante que tu negocio tenga un portal donde pueda presentar su oferta para que los potenciales clientes puedan consultar tu información.",
          url: `${baseUrlImages}info.svg`,
        },
        {
          title: "Diferenciate de la competencia",
          description:
            "Una web te permite mayor cercanía, las personas que busquen tus servicios o productos podran ver muy rapidamente que tu ofreces esos servicios.",
          url: `${baseUrlImages}competencia.svg`,
        },
      ],
      footerTitle: "Contrata hoy mismo tu página web",
      footerButton: {
        title: "Contrata hoy mismo tu página web",
        link: "#",
      },
    },
    features: {
      title: "¿Que incluimos en nuestras páginas web?",
      subtitle:
        "Ya sea que necesitas un sitio web de WordPress, para poner tu negocio en línea, o una página online de ecommerce más completa, nuestro equipo de desarrollo web, te ayudará a hacer realidad tu visión.",
      services: [
        {
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/webresponsive.svg`,
          typeService: "WEB",
          nameService: "Diseño responsive",
          backgroundColor: "#5cb25b",
        },
        {
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/googleweb.svg`,
          typeService: "WEB",
          nameService: "Optimizada para Google",
          backgroundColor: "#a8ddac",
        },
        {
          url: `${baseUrlImages}adminfeature.svg`,
          typeService: "WEB",
          nameService: "100% Autoadministrable",
          backgroundColor: "#95d6b4",
        },
        {
          url: `${baseUrlImages}tiempo-entrega.svg`,
          typeService: "WEB",
          nameService: "Entrega de 4 a 7 días",
          backgroundColor: "#4c955e",
        },
        {
          url: `${baseUrlImages}compartir.svg`,
          typeService: "WEB",
          nameService: "Redes sociales",
          backgroundColor: "#83ae27",
        },
        {
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/fotos.svg`,
          typeService: "WEB",
          nameService: "Imagenes profesionales",
          backgroundColor: "#00471a",
        },
      ],
    },
    examples: {
      title: "Echa un ojos a nuestras demos",
      demos: [
        {
          title: "Diseño Web",
          titleButtonDemo: "Ver Demo",
          titleButtonCheckout: "Consigue tu web",
          urlImageDemo: `${baseUrlImages}demo-1.jpg`,
          linkDemo: "https://startfly.es/wordpress/?page_id=6",
          linkCheckout: "",
        },
        {
          title: "Diseño Web",
          titleButtonDemo: "Ver Demo",
          titleButtonCheckout: "Consigue tu web",
          urlImageDemo: `${baseUrlImages}demo-2.jpg`,
          linkDemo: "~",
          linkCheckout: "",
        },
      ],
    },
    seoMessage: {
      title: "CONTRATA NUESTROS SERVICIOS Y AUMENTA LAS CONVERSIONES",
      description:
        "En StartFly nos especializamos en diseñar marcas reconocidas y desarrollar sitios web que cumplan con los estándares W3C, siendo compatibles con los dispositivos más recientes. Además contamos con un grupo de diseñadores y desarrolladores web profesionales, dedicados a crear sitios web potente, efectivos y atractivos.",
      quote:
        "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de la facturación y un mayor público.",
      author: "KEVIN RIVERA - SEO STARTFLY",
    },
    packs: {
      title: "¡Empiece ya a mejorar los resultados de su negocio!",
      packs: [
        {
          name: "VALENCIA",
          features: [
            "Diseño web personalizado",
            "Web monopágina (Navegación parallax)",
            "Slider animado",
            "Hasta 5 modulos de contenido",
            "Footer de contacto",
            "Asesoría y redacción de textos",
            "Administrable",
            "Optimizada: carga rápida y código limpio",
            "Multidispositivo (Responsive)",
            "Hosting + Dominio + Certificado SSL",
            "Páginas legales + Aviso cookies",
            "Publicada en 7 días",
            "Escalable: puede crecer por secciones"
          ],
          button: {
            title: "Activar pack",
            link: "/product/pack-valencia",
          },
          price: "300 €",
          backgroundColor: "#95d6b4",
        },
        {
          name: "IBIZA",
          features: [
            "Diseño personalizado",
            "Google Friendly + Google Analytics",
            "Web multipágina",
            "4 páginas + contacto",
            "Hasta 7 modulos de contenido",
            "Asesoria y redacción de textos",
            "Administrable",
            "Optimizada: carga rápida y código limpio",
            "Multidispositivo (Responsive)",
            "Certificado SSL (Web segura)",
            "Páginas legales + Aviso cookies",
            "Publicación en 14 días",
            "Hosting + Dominio + Certificado SSL",
          ],
          button: {
            title: "Activar pack",
            link: "/product/pack-ibiza",
          },
          price: "500€",
          backgroundColor: "#5cb25b",
        },
        {
          name: "MALLORCA",
          features: [
            "Todo lo anterior y adémas...",
            "Web Multiidioma (Hasta 3)",
            "Web Multipágina (Secciones ilimitadas)",
            "Hasta 12 Páginas + Contacto",
            "Animaciones especiales",
            "Estudio de busqueda de palabras clave de clientes potenciales",
            "Creación de la estructura de campaña y redacción de anuncios magnéticos para tu negocio",
            "Análisis y optimización de tus Landings para conseguir el maximo de conversiones con la menor inversión",
            "Informes periódicos de rendimiento y posibles oportunidades de negocio que requieran estrategia",
            "Escalable: posiblidad de crecimiento de páginas",
            "Publicación aproximadamente de 3 semanas"
          ],
          button: {
            title: "Activar pack",
            link: "/product/diseño-web-pack-mallorca",
          },
          price: "900€",
          backgroundColor: "rgb(131, 174, 39)",
        },
      ],
    },
    allInOne: {
      title: "TODOS NUESTROS PACKS INCLUYEN",
      features: [
        " PROYECTOS LLAVE EN MANO",
        " CREACIÓN DE CUENTAS DE CORREO ELECTRONICO",
        " ADAPTACIÓN A IDENTIDAD CORPORATIVA",
        " DERECHOS DE PROPIEDAD INTELECTUAL",
        " INSTALACIÓN EN TU SERVIDOR",
        " FORMULARIOS DE CONTACTO",
      ],
    },
    formWeb: {
      title: "¿TIENES DUDAS?",
      subtitle: "Contacta con nosotros como prefieras",
      call: {
        title: "Déjanos tú telefono y te llamamos:",
        privacity: "He leído y acepto la politica de privacidad",
        button: {
          name: "TE LLAMAMOS",
          link: "#",
        },
      },
      email: {
        title:
          "También puedes enviarnos un correo o monkeycode@gmail.com, o utilizar este formulario de contacto. Estamos a tu disposición para cualquier pregunta o duda que puedas tener.",
        privacity: "He leído y acepto la politica de privacidad",
        button: {
          name: "ENVIANOS TU CONSULTA",
          link: "#",
        },
      },
    },
  }
  return (
    <>
      <SEO title="Agencia de diseño de páginas web económicas en valencia" />
      <SEO description="Startfly es una empresa de diseño web profesional con varios años de experiencia. Creamos tu página web a un precio de escandalo." />
      <Helmet>
        <html lang="es" />
        <meta name="keywords" content="diseño de páginas web en valencia, diseño web profesional, paginas web ecónomicas, diseño web en valencia" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <link rel="canonical" href="https://startfly.es/diseño-web-profesional/"></link>
      </Helmet>
      <Header />
      <Banner
        title={infoLanding.banner.title}
        subtitle={infoLanding.banner.subtitle}
        buttonPrimary={infoLanding.banner.buttonPrimary}
        buttonSecondary={infoLanding.banner.buttonSecondary}
        imageLink={infoLanding.banner.imageLink}
        backgroundImage={infoLanding.backgroundImage}
      />
      <Advantages
        title={infoLanding.Advantages.title}
        subtitle={infoLanding.Advantages.subtitle}
        advantages={infoLanding.Advantages.advantages}
        footerTitle={infoLanding.Advantages.footerTitle}
        footerButton={infoLanding.Advantages.footerButton}
      />
      <ServiceFeatures
        title={infoLanding.features.title}
        subtitle={infoLanding.features.subtitle}
        services={infoLanding.features.services}
      />
      <Examples
        title={infoLanding.examples.title}
        demos={infoLanding.examples.demos}
      />
      
      <PackContainer
        title={infoLanding.packs.title}
        packs={infoLanding.packs.packs}
      />
      <AllInOne
        title={infoLanding.allInOne.title}
        features={infoLanding.allInOne.features}
      />
      <FormContact
        title={infoLanding.formWeb.title}
        subtitle={infoLanding.formWeb.subtitle}
        call={infoLanding.formWeb.call}
        email={infoLanding.formWeb.email}
      />
      <Footer />
      <TopButton />
    </>
  )
}
