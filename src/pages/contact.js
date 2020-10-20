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
import FormContact from "../components/FormContact"

export default function IndexPage({ pageContext }) {
  const { titlePage } = pageContext
  const infoLanding = {
    
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
      <SEO title="StartFly | Contacto" />
      <Header />
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
