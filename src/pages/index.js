import React from "react"
import Header from "../components/Header/Header"
import MainBanner from "../components/MainBanner"
import Services from "../components/Services"
import TopButton from "../components/TopButton"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Process from "../components/Process"
import Buy from "../components/Buy"
import SeoMessage from "../components/SeoMessage"
import {Helmet} from "react-helmet";

export default function IndexPage({ pageContext }) {
 
  const indexPage = {
    infoEcommerce: {
      title: "Diseño de tiendas online",
      subtitle: "Comienza a vender en internet",
      description:
        "Te ofrecemos la posibilidad de vender en línea, las 24 horas del día, los 7 días de la semana, con una experiencia de usuario encantadora que no encontrarás en ningún otro lugar.",
      advantages: [
        "Desarrollamos tu tienda online con un diseño profesional y optimizado a la conversión.",
        "Estudiamos tu producto y modelo de negocio.",
        "Creamos la arquitectura web de tu tienda orientada a SEO.",
        "Presentamos un boceto de la maquetación de la tienda y sus funcionalidades.",
        "Desarrollamos tu tienda online con un diseño profesional y optimizado a la conversión.",
        "Te entragamos una tienda online totalmente autogestionable."
      ],
      buttons: [
        {
          link: "/diseño-tienda-online/",
          title: "Empieza a vender online",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/ecommerce-plan.jpg",
      background: "#EFFCFA",
    },
    seoMessage: {
      title: "CONTRATA NUESTROS SERVICIOS Y AUMENTA LAS CONVERSIONES",
      description:
        "En StartFly nos especializamos en diseñar marcas reconocidas y desarrollar sitios web que cumplan con los estándares W3C, siendo compatibles con los dispositivos más recientes. Además contamos con un grupo de diseñadores y desarrolladores web profesionales, dedicados a crear sitios web potentes, efectivos y atractivos.",
      quote:
        "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de la facturación y un mayor público.",
      author: "KEVIN RIVERA - SEO STARTFLY",
    },
    infoWeb: {
      title: "Diseño de páginas web",
      subtitle: "Desarrollamos tu presencia en internet",
      description:
        "Con el máximo esfuerzo y atención a los detalles, creamos y diseñamos sitios online, aplicaciones web y otros servicios relacionados, que responden con precisión a tus expectativas y satisfacen las necesidades específicas de tu empresa.",
      advantages: [
        "Todos nuestros proyectos llevan incorporado un plan SEO inicial.",
        "Optimización para móviles y tablets.",
        "Tenemos los mejores precios del mercado en cuanto a diseño web para tu empresa.",
        "Todas nuestras webs son totalmente autoadministrables.",
      ],
      buttons: [
        {
          link: "/diseño-web-profesional/",
          title: "Contrata tu página web",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/dise%C3%B1o-web-planes.jpg",
      background: "#EFFCFA",
      reverse: true,
    },
  }

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Diseño web valencia | Agencia de diseño de páginas web</title>
        <meta name="description" content="¿Necesitas una pagina web única y profesional que te genere ingresos? En Startfly te ofrecemos un diseño de páginas web desde 300€ y tiendas online desde 500€. Animate noo tengas miedo de experimentar!" ></meta>
        <meta name="keywords" content="diseño web valencia,diseño web,diseño de paginas web,diseño de paginas web valencia,diseño de tienda online,diseño de paginas web,agencia de diseño de paginas web,agencia de diseño web,diseño de webs,paginas web valencia" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta> 
        <link rel="canonical" href="https://startfly.es/"></link>
      </Helmet>
      <Header />
      <MainBanner />
      <Services />
      <Info data={indexPage.infoEcommerce} />
      <Info data={indexPage.infoWeb} />
      <Process />
      <Buy />
      <SeoMessage
        title={"SOBRE STARTFLY AGENCIA DE DISEÑO WEB VALENCIA"}
        description={"Startfly es un equipo de jóvenes diseñadores Web, en nuestra agencia estamos especializados en el diseño de páginas web. En Startfly te ayudamos a emprender tu negocio online con la máxima calidad al precio más bajo. Realizamos el servicio de Web Low Cost en el que puedes elegir entre varias opciones de tarifas acorde a la magnitud de tu proyecto."}
        quote={"¿Necesitas una web o crear una web personalizada a tu marca?. Si necesitas algo especial, Startfly te ofrece servicios personalizados para la creación, desarrollo, programación y mantenimiento de tu web."}
        author={"Agencia de diseño de páginas web"}
      />
      <Footer />
      <TopButton />
    </>
  )
}
