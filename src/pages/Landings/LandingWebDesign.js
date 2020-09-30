import React from "react"
import ScrollUpButton from "react-scroll-up-button"
import SEO from "../../components/seo"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Advantages from "../../components/Advantages/Advantages"
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures"
import Examples from "../../components/Examples/Examples"
import SeoMessage from "../../components/SeoMessage/SeoMessage"
import PackContainer from "../../components/PackContainer/PackContainer"
import AllInOne from "../../components/AllInOne/"
import FormContact from "../../components/FormContact/"
import TopButton from "../../components/TopButton"
import Footer from "../../components/Footer"

export default function IndexPage({ pageContext }) {
  const baseUrlImages = "http://d1r0i6dbql3qta.cloudfront.net/"
  const infoLanding = {
    titlePage: "Diseño web rápido, original y seguro | MonkeyCode",
    banner: {
      title: "DISEÑO WEB ORIGINAL RAPIDO Y SEGURO",
      subtitle: "Creamos sitios web únicos para pequeñas y medianas empresas",
      buttonPrimary: {
        title: "Ver Planes",
        link: "#",
      },
      buttonSecondary: {
        title: "¡Contactanos Ya!",
        link: "#",
      },
      imageLink: `${baseUrlImages}dise%C3%B1o-web-banner-icon.svg`,
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
          title: "Incrementa tus ventas y fideliza a los clientes",
          description:
            "Estudia a tus clientes y crea una estrategia enfocada en fidelizar a nuevos clientes para tu negocio. Puedes escribir un blog hablando sobre los productos o servicios que ofreces y asi animar a tu publico a contactar con tu negocio.",
          url: `${baseUrlImages}fidelizar.svg`,
        },

        {
          title: "Amplía tu mercado",
          description:
            "Tener presencia en internet te ofrece la oportunidad de llegar a más clientes además de mejorar las oportunidades de negocio y la captación de clientes potenciales.",
          url: `${baseUrlImages}crecimiento.svg`,
        },
        {
          title: "Disponible 24 horas",
          description:
            "Tu sitio web estará disponible para proporcionar información las 24 horas del día.",
          url: `${baseUrlImages}time.svg`,
        },
        {
          title: "Herramienta de venta",
          description:
            "Es importante que tu negocio tenga un portal donde pueda presentar su oferta para que los potenciales clientes puedan consultar la información antes de tomar una desición.",
          url: `${baseUrlImages}info.svg`,
        },
        {
          title: "Diferenciate de la competencia",
          description:
            "Una web te permite mayor cercanía, las personas que busquen tus servicios o productos podran ver muy rapidamente que tu ofreces esos servicios y obtendras un mayor rango de venta.",
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
          url: `${baseUrlImages}responsive.svg`,
          typeService: "WEB",
          nameService: "Diseño responsive",
          backgroundColor: "#F1EADE",
        },
        {
          url: `${baseUrlImages}google-seo.svg`,
          typeService: "WEB",
          nameService: "Optimizada para Google",
          backgroundColor: "#F7D9D9",
        },
        {
          url: `${baseUrlImages}autoadministrable.svg`,
          typeService: "WEB",
          nameService: "100% Autoadministrable",
          backgroundColor: "#EBE6FB",
        },
        {
          url: `${baseUrlImages}tiempo-entrega.svg`,
          typeService: "WEB",
          nameService: "Entrega de 4 a 7 días",
          backgroundColor: "#C9BFC8",
        },
        {
          url: `${baseUrlImages}compartir.svg`,
          typeService: "WEB",
          nameService: "Integración a redes sociales",
          backgroundColor: "#339AD6",
        },
        {
          url: `${baseUrlImages}camara.svg`,
          typeService: "WEB",
          nameService: "Imagenes profesionales",
          backgroundColor: "#F9992D",
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
          linkDemo: "~",
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
        "En MonkeyCode nos especializamos en diseñar marcas reconocidas y desarrollar sitios web que cumplan con los estándares W3C, siendo compatibles con los dispositivos más recientes. Además contamos con un grupo de diseñadores y desarrolladores web profesionales, dedicados a crear sitios web potente, efectivos y atractivos.",
      quote:
        "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de la facturación y un mayor público.",
      author: "KEVIN RIVERA - SEO MONKEYCODE",
    },
    packs: {
      title: "¡Empiece ya a mejorar los resultados de su negocio!",
      packs: [
        {
          name: "VALENCIA",
          features: [
            "Diseño único y original",
            "Secciónes ilimitadas",
            "Categorización",
            "Web Móvil (Responsive)",
            "15 fotos profesionales",
            "Integración a redes sociales",
            "Autoadministrable",
            "Formación",
          ],
          button: {
            title: "Activar pack",
            link: "/product/pack-valencia",
          },
          price: "270€",
          backgroundColor: "#4071B",
        },
        {
          name: "IBIZA",
          features: [
            "Diseño único y original",
            "Secciónes ilimitadas",
            "Creación de slogans",
            "Categorización",
            "Web Móvil (Responsive)",
            "15 fotos profesionales",
            "Alta en Google Maps, Google Business",
            "Integración a redes sociales",
            "Muchas mas caracteristicas",
            "Autoadministrable",
            "Formación",
          ],
          button: {
            title: "Activar pack",
            link: "/product/pack-ibiza",
          },
          price: "450€",
          backgroundColor: "#FFAE37",
        },
        {
          name: "MALLORCA",
          features: [
            "Todo lo anterior y adémas",
            "Experiencia de usuarios extra",
            "Slogans + textos potentes",
            "Efectos y animaciones",
            "Adaptada a multiples idiomas (3)",
            "Meta - etiquetado",
            "Alta en Google Maps, Business y Analytics",
            "30 fotos profesionales",
            "!Y mucho más¡",
          ],
          button: {
            title: "Activar pack",
            link: "/product/diseño-web-pack-mallorca",
          },
          price: "690€",
          backgroundColor: "#92CD41",
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
      <SEO title={infoLanding.titlePage} />
      <Header />
      <Banner
        title={infoLanding.banner.title}
        subtitle={infoLanding.banner.subtitle}
        buttonPrimary={infoLanding.banner.buttonPrimary}
        buttonSecondary={infoLanding.banner.buttonSecondary}
        imageLink={infoLanding.banner.imageLink}
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
      <SeoMessage
        title={infoLanding.seoMessage.title}
        description={infoLanding.seoMessage.description}
        quote={infoLanding.seoMessage.quote}
        author={infoLanding.seoMessage.author}
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
