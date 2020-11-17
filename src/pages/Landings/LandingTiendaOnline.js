import React from "react"

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
import {Helmet} from "react-helmet"
export default function IndexPage({ pageContext }) {
  const baseUrlImages = "https://d1r0i6dbql3qta.cloudfront.net/"
  const infoLanding = {
    titlePage: "Diseño web rápido, original y seguro | MonkeyCode",
    backgroundImage: "https://monkeycode.s3.eu-west-3.amazonaws.com/bannweb.jpg",
    banner: {
      title: "DISEÑAMOS TU TIENDA ONLINE PROFESIONAL",
      subtitle:
        "Céntrate exclusivamente en vender tu producto o servicio. Nosotros nos encargamos de crear tu tienda online y dejarla lista para vender.",
      buttonPrimary: {
        title: "Ver Planes",
        link: "#",
      },
      buttonSecondary: {
        title: "¡Contactanos Ya!",
        link: "#",
      },
      imageLink: `${baseUrlImages}bannerweb.svg`,
    },
    Advantages: {
      title: "¿Por qué debes tener una tienda online?",
      subtitle:
        "Vende tus productos en una plataforma web propia y que puedas editar en cualquier momento para adaptarla a tus necesidades ",
      advantages: [
        {
          title: "Amplía tu mercado, de local a global",
          description:
            "Tener una tienda online permite que tu mercado vaya más alla de tu localidad. Podrás acceder a ella desde cualquier punto del planeta.",
          url: `${baseUrlImages}mundo.svg`,
        },
        {
          title: "Flexibiliza tus horarios",
          description:
            "Una tienda online está abierta 24 horas al día, 7 días a la semana y 365 días al año. De esa forma no atas al cliente a  tu horario de apertura.",
          url: `${baseUrlImages}fidelizar.svg`,
        },

        {
          title: "Tu competencia ya está en la red",
          description:
            "Si entras en la red podrás hacer competencia directa a tus similares en la red, sin embargo, si no decides entrar tu competencia seguirá por delante de tu negocio.",
          url: `${baseUrlImages}crecimiento.svg`,
        },
        {
          title: "Conecta mejor con tus clientes",
          description:
            "Gracias a la analítica web podrás conocer más detalles sobre tus clientes y orientar así tu campaña de marketing, tus productos, etc. Cuanto más sepas sobre ellos, más podrás cubrir sus necesidades con tus productos.",
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/confianza.svg`,
        },
        {
          title: "Menores costes",
          description:
            "Las tiendas tradicionales soportan costes fijos altos. Pagar local, agua, luz, agua, etc. A diferencia de ello, una tienda online tiene un coste mucho menor.¿Qué precio tiene la compra del dominio y almacenamiento?,¿Y la creación de una plataforma que haga de tienda? Sin duda, el coste es mucho más bajo.",
          url: `${baseUrlImages}info.svg`,
        },
        {
          title: "Diferenciate de la competencia",
          description:
            "Una web te permite mayor cercanía, las personas que busquen tus servicios o productos podran ver muy rapidamente que tu ofreces esos servicios y obtendras un mayor rango de venta.",
          url: `${baseUrlImages}competencia.svg`,
        },
      ],
      footerTitle: "Contrata hoy mismo tu tienda online",
      footerButton: {
        title: "Contrata hoy mismo tu tienda online",
        link: "#",
      },
    },
    features: {
      title: "¿Que incluimos en nuestras tiendas online?",
      subtitle:
        "Equipamos nuestras tiendas con todo lo que necesitas para comenzar a vender online",
      services: [
        {
          url: `${baseUrlImages}001-comprar.svg`,
          typeService: "ECOMMERCE",
          nameService: "Sistemas de pago",
          backgroundColor: "#CCDBDC",
        },
        {
          url: "https://monkeycode.s3.eu-west-3.amazonaws.com/cms.svg",
          typeService: "ECOMMERCE",
          nameService: "Construida con Prestashop",
          backgroundColor: "#9AD1D4",
        },
        {
          url: `https://monkeycode.s3.eu-west-3.amazonaws.com/en-todo-el-mundo.svg`,
          typeService: "ECOMMERCE",
          nameService: "Adaptada a imagen corporativa",
          backgroundColor: "#80CED7",
        },
        {
          url: `${baseUrlImages}tiempo-entrega.svg`,
          typeService: "ECOMMERCE",
          nameService: "Diseño y configuración personalizada",
          backgroundColor: "#007EA7",
        },
        {
          url: `${baseUrlImages}compartir.svg`,
          typeService: "ECOMMERCE",
          nameService: "Autogestionable",
          backgroundColor: "#003249",
        },
        {
          url: `${baseUrlImages}003-almacen.svg`,
          typeService: "ECOMMERCE",
          nameService: "Control de Stock",
          backgroundColor: "#0070A3",
        },
      ],
    },
    examples: {
      title: "Echa un ojos a nuestras demos de ecommerce",
      demos: [
        {
          title: "Tienda online",
          titleButtonDemo: "Ver Demo",
          titleButtonCheckout: "Consigue tu web",
          urlImageDemo: `${baseUrlImages}demo-1.jpg`,
          linkDemo: "#",
          linkCheckout: "#",
        },
        {
          title: "Tienda online",
          titleButtonDemo: "Ver Demo",
          titleButtonCheckout: "Consigue tu web",
          urlImageDemo: `${baseUrlImages}demo-2.jpg`,
          linkDemo: "#",
          linkCheckout: "#",
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
          name: "ROMA",
          features: [
           "Diseño gráfico original",
           "Productos infinitos",
           "Gestión de Stock, precios, codigos de descuento",
           "Paypal, targeta y transferencia",
           "Notificaciones automáticas",
           "Programación en Wordpress",
           "Web móvil (responsive)",
           "Secciones ilimitadas",
           "Importación de hasta 15 productos"
          ],
          button: {
            title: "Activar",
            link: "/product/diseño-web-pack-roma",
          },
          price: "500 €",
          backgroundColor: "#95d6b4",
        },
        {
          name: "MILAN",
          features: [
            "Diseño único y original",
            "Paypal, targeta y transferencia",
            "Notificaciones automaticas",
            "Categorización",
            "Modulo de gestión de envios",
            "WordPress o Prestashop",
            "2 idiomas (No incluye traducción)",
            "Secciones ilimitadas",
            "Slogans y mensajes",
            "Web Móvil (Responsive)",
            "Importación de hasta 50 productos"
          ],
          button: {
            title: "Activar pack",
            link: "/product/diseño-web-pack-milan",
          },
          price: "780 €",
          backgroundColor: "#5cb25b",
        },
        {
          name: "VENECIA",
          features: [
            "Diseño único y original",
            "Paypal, targeta y transferencia",
            "Notificaciones automaticas",
            "Categorización",
            "Plan de lanzamiento (Adwords y Facebook)",
            "Revisión de redacciónes",
            "Modulo de gestión de envios",
            "WordPress o Prestashop",
            "Multi-idioma (Hasta 5 idiomas)",
            "Secciones ilimitadas",
            "Slogans y mensajes",
            "Web Móvil (Responsive)",
            "Importación de hasta 100 productos"
          ],
          button: {
            title: "Activar pack",
            link: "/product/diseño-web-pack-venecia",
          },
          price: "1300 €",
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
      <Helmet>
        <html lang="es" />
        <title>Diseño Web Valencia | Agencia de diseño web y ecommerce </title>
        <meta name="description" content="StartFly es una empresa de diseñadores profesionales de páginas web con muchas experiencia. Diseñamos y desarrollamos tu página web a un precio incomparable." ></meta>
        <meta name="keywords" content="diseño web valencia, diseño web, diseño paginas web, paginas web valencia, diseño de paginas web valencia, diseño y creacion web, diseño paginas web valencia, agencia diseño web, desarrollo web valencia, creadores de paginas web en valencia, empresas paginas web valencia, desarrollo de paginas web valencia, diseño y desarrollo web valencia, agencia de diseño de paginas web, agencia de diseño web, empresas de diseño web valencia, crear web valencia, diseño web paginas web, diseño creacion paginas web, diseño web web, creacion paginas web, contratar diseñador web, paginas de diseño online" />
        <meta name="robots" content="index"/>
        <meta property="og:site_name" content="Startfly"></meta>
        <meta property="og:locale" content="es_ES"></meta>
        <link rel="canonical" href="https://startfly.es/diseño-tienda-online"></link>
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
