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

export default function IndexPage({ pageContext }) {
  const { titlePage } = pageContext
  const indexPage = {
    infoEcommerce: {
      title: "Tu pagina online de ecommerce más completa",
      subtitle: "Aumenta las conversiones",
      description:
        "Te ofrecemos la posibilidad de vender en línea, las 24 horas del día, los 7 días de la semana, con una experiencia de cliente encantadora que no encontráras en ningún otro lugar.",
      advantages: [
        "Nuestras  tiendas se adaptan perfectamente a cualquier tipo de dispositivo.",
        "Múltiples formas de pago como PayPal, tarjeta y transferencia.",
        "Integracón de la ficha de tus productos en las principales redes sociales.",
        "Instalamos el certificado SSL en todo el dominio de su tienda.",
        "Nuestras tiendas online tienen la posiblidad de tener varios idiomas.",
      ],
      buttons: [
        {
          link: "/productos/ecommerce",
          title: "Empieza a vender online",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/tim-bennett-OwvRB-M3GwE-unsplash+1+(4).png",
      background: "#EFFCFA",
    },
    infoWeb: {
      title: "Diseño web enfocado a objetivos",
      subtitle: "Presencia web",
      description:
        "Con el máximo esfuerzo y atención a los detalles, creamos y diseñamos sitios online, aplicaciones web y otros servicios relacionados, que responden con precisión a tus expectativas y satisfacen las necesidades específicas de tu empresa.",
      advantages: [
        "Todos nuestros proyectos llevan incorporado un plan SEO inicial.",
        "Optimización para móviles y tablets.",
        "Tenemos los mejores precios del mercado en cuanto a diseño web para tu empresa.",
      ],
      buttons: [
        {
          link: "/productos/ecommerce",
          title: "Contrata tu página web",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/emile-perron-xrVDYZRGdw4-unsplash+1.png",
      background: "#EFFCFA",
      reverse: true,
    },
  }
  return (
    <>
      <SEO title="StartFly | Agencia de diseño web profesional, rapido y seguro" />
      <Header />
      <MainBanner />
      <Services />
      <Info data={indexPage.infoEcommerce} />
      <Info data={indexPage.infoWeb} />
      <Process />
      <Buy />
      <Footer />
      <TopButton />
    </>
  )
}
