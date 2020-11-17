import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header"

import TopButton from "../components/TopButton"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
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
      <Banner 
        title="ESTAMOS ENCANTADOS DE CONOCER TU PROYECTO"
        subtitle="En Startfly te ayudamos a ahorrar desde el primer momento. No gaster en teléfono, nosotros te llamamos."
        backgroundImage="https://monkeycode.s3.eu-west-3.amazonaws.com/banntienda.jpg"
        
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
