import React from "react"
import {Helmet} from "react-helmet"
import SEO from "../../components/seo"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"
import FormContact from "../../components/FormContact/";

export default function IndexPage({ pageContext }) {
  const baseUrlImages = "https://d1r0i6dbql3qta.cloudfront.net/"
  const infoContactForm = {
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
  }
  return (
    <>
      <SEO title="Diseño de tiendas online y ecommerce en Valencia | Diseño web Valencia" />
      <SEO description="¿Quieres abrir una Tienda Online a un precio insuperable y con todas las funcionalidades? Startfly te ofrece un trabajo profesional a partir de 500 €." />
      <Helmet>
        <html lang="es" />
        <meta name="keywords" content="diseño de páginas web en valencia, diseño web profesional, paginas web ecónomicas, diseño web en valencia" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <link rel="canonical" href="https://startfly.es/diseño-tienda-online/"></link>
      </Helmet>
      <Header />
      <Banner
        title="Mantenimiento web, soporte técnico, gestión de dominios y hosting"
        subtitle="Nos preocupa el buen funcionamiento de tu web para que tu puedas dedicarte a tu negocio."
        backgroundImage="https://monkeycode.s3.eu-west-3.amazonaws.com/bannweb.jpg"
      />
      <FormContact
        title={infoContactForm.title}
        subtitle={infoContactForm.subtitle}
        call={infoContactForm.call}
        email={infoContactForm.email}
      />  
      <Footer />
      <TopButton />
    </>
  )
}
