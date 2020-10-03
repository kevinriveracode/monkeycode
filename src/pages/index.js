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
      title: "Empieza a vender en internet",
      subtitle: "Tienda online diseñada por Monkeycode",
      description:
        "Te ofrecemos la posibilidad de vender en línea, las 24 horas del día, los 7 días de la semana, con una experiencia de cliente encantadora que no encontráras en ningún otro lugar.",
      advantages: [
        "Diseñamos una plantilla única y original para tu empres, adaptada a la imagen corporativa de tu empresa.",
        "Hacemos tiendas online que se adaptan a todo tipo de dispositivos.",
        "Te entregamos una tienda equipada con varios metodos de pago como transferencia, paypal o targeta.",
        "Incluimos hosting y dominio a tu nombre.",
        "¿Y mucho mas!",
      ],
      buttons: [
        {
          link: "/productos/ecommerce",
          title: "Más información",
          style: "secondary",
        },
        {
          link: "/productos/ecommerce",
          title: "Más información",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/tim-bennett-OwvRB-M3GwE-unsplash+1+(4).png",
      background: "#f1f2f3",
    },
    infoWeb: {
      title: "Potencia tu presencia online",
      subtitle: "Página web diseñada por Monkeycode",
      description:
        "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de factuación y un mayor público. ¡Así que contáctanos ya!",
      advantages: [
        "Nuestro estilo de diseño audaz y el uso de un código de marcado muy limpio, se combinan para producir sitios web fabulosos.",
        "Contamos con un grupo de diseñadores y desarrolladores web profesionales.",
        "Tenemos los mejores precios del mercado en cuanto a diseño web para tu empresa.",
      ],
      buttons: [
        {
          link: "/productos/ecommerce",
          title: "Más información",
          style: "secondary",
        },
        {
          link: "/productos/ecommerce",
          title: "Más información",
          style: "primary",
        },
      ],
      image:
        "https://monkeycode.s3.eu-west-3.amazonaws.com/emile-perron-xrVDYZRGdw4-unsplash+1.png",
      background: "#f1f2f3",
      reverse: true,
    },
  }
  return (
    <>
      <SEO title="Monkeycode | Agencia de diseño web profesional, rapido y seguro" />
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
