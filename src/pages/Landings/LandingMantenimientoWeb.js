import React from "react"
import {Helmet} from "react-helmet"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"
import FormContact from "../../components/FormContact/";

export default function IndexPage({ pageContext }) {
  const infoContactForm = {
      title: "¿TIENES DUDAS?",
      subtitle: "Contacta con nosotros como prefieras",
      call: {
        title: "Déjanos tu telefono y te llamamos:",
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
          name: "ENVÍANOS TU CONSULTA",
          link: "#",
        },
      },
  }
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Expertos en Mantenimiento Web Wordpress desde 20€ | startfly</title>
        <meta name="description" content="Somos expertos en mantenimiento de páginas web en WordPress desde 20€ al mes, soporte técnico y ayuda en caso de virus. ¡Mantén tu web actualizada! ✅" ></meta>
        <meta name="keywords" content="diseño web valencia, diseño web, diseño paginas web, paginas web valencia, diseño de paginas web valencia, diseño y creacion web, diseño paginas web valencia, agencia diseño web, desarrollo web valencia, creadores de paginas web en valencia, empresas paginas web valencia, desarrollo de paginas web valencia, diseño y desarrollo web valencia, agencia de diseño de paginas web, agencia de diseño web, empresas de diseño web valencia, crear web valencia, diseño web paginas web, diseño creacion paginas web, diseño web web, creacion paginas web, contratar diseñador web, paginas de diseño online" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <link rel="canonical" href="https://startfly.es/mantenimiento-web/"></link>
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
