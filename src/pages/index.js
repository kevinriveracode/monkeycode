import React from "react"
import SEO from "../components/seo"
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
      title: "Diseño Tienda Online Profesional",
      subtitle: "¿Quieres Vender Online?",
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
      title: "Diseño Web Profesional",
      subtitle: "Desarrollamos tu presencia en internet",
      description:
        "Con el máximo esfuerzo y atención a los detalles, creamos y diseñamos sitios online, aplicaciones web y otros servicios relacionados, que responden con precisión a tus expectativas y satisfacen las necesidades específicas de tu empresa.",
      advantages: [
        "Todos nuestros proyectos llevan incorporado un plan SEO inicial.",
        "Optimización para móviles y tablets.",
        "Tenemos los mejores precios del mercado en cuanto a diseño web para tu empresa.",
        "Todas nuestras web son totalmente autoadministrable.",
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

  const description = "Diseño web profesional, rápido y seguro para pymes y emprendedores. Wordpress profesional y desarrollos a medida. Te ofrecemos calidad, entregas rápidas y precios competitivos."

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Diseño Web Valencia | Agencia de diseño web y ecommerce </title>
        <meta name="description" content="StartFly es una empresa de diseñadores profesionales de páginas web con muchas experiencia. Diseñamos y desarrollamos tu página web a un precio incomparable." ></meta>
        <meta name="keywords" content="diseño web valencia, diseño web, diseño paginas web, paginas web valencia, diseño de paginas web valencia, diseño y creacion web, diseño paginas web valencia, agencia diseño web, desarrollo web valencia, creadores de paginas web en valencia, empresas paginas web valencia, desarrollo de paginas web valencia, diseño y desarrollo web valencia, agencia de diseño de paginas web, agencia de diseño web, empresas de diseño web valencia, crear web valencia, diseño web paginas web, diseño creacion paginas web, diseño web web, creacion paginas web, contratar diseñador web, paginas de diseño online" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
          "@context": "https://schema.org",
          "@type": "Agencia Web",
          "name": "Startfly",
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Jorge Lopez"
            }
          },
        }`}}>
        </script>
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
        title={"CONTRATA NUESTROS SERVICIOS Y AUMENTA LAS CONVERSIONES"}
        description={"En StartFly nos especializamos en diseñar marcas reconocidas y desarrollar sitios web que cumplan con los estándares W3C, siendo compatibles con los dispositivos más recientes. Además contamos con un grupo de diseñadores y desarrolladores web profesionales, dedicados a crear sitios web potentes, efectivos y atractivos."}
        quote={"Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de la facturación y un mayor público."}
        author={"KEVIN RIVERA - SEO STARTFLY"}
      />
      <Footer />
      <TopButton />
    </>
  )
}
