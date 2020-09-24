/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/diseño-web-profesional",
    component: require.resolve("./src/pages/Landings/LandingWebDesign.js"),
    context: {
      infoLanding: {
        titlePage: "Diseño web rápido, original y seguro | MonkeyCode",
        banner: {
          title: "DISEÑO WEB ORIGINAL RAPIDO Y SEGURO",
          subtitle:
            "Creamos sitios web únicos para pequeñas y medianas empresas",
          buttonPrimary: {
            title: "Ver Planes",
            link: "#",
          },
          buttonSecondary: {
            title: "¡Contactanos Ya!",
            link: "#",
          },
          imageLink: "",
        },
        Advantages: {
          title: "Contrata nuestros servicios y aumenta las conversiones",
          subtitle:
            "Una buena presencia online, repercutirá en un aumento de la conversión de tus clientes, un aumento de facturación y un mayor público",
          advantages: [
            {
              title: "Imagen profesional",
              description:
                "Tener una página web te permite hacer publicidad y promocionar tu negocio con una exposición a nivel mundial gracias al gran alcance de internet.",
              url: "",
            },
            {
              title: "Disponible 24 horas",
              description:
                "Tu sitio web estará disponible para proporcionar información las 24 horas del día.",
              url: "",
            },
            {
              title: "Amplía tu mercado",
              description:
                "Tener presencia en internet te ofrece la oportunidad de llegar a más clientes además de mejorar las oportunidades de negocio y la captación de clientes potenciales.",
              url: "",
            },
            {
              title: "Herramienta de venta",
              description:
                "Es importante que tu negocio tenga un portal donde pueda presentar su oferta para que los potenciales clientes puedan consultar la información antes de tomar una desición.",
              url: "",
            },
          ],
          footerTitle: "Contrata hoy mismo tu página web",
          footerButton: {
            title: "Contrata hoy mismo tu página web",
            link: "#",
          },
        },
        features: {
          title: "¿Que incluimos en nuestra páginas web?",
          subtitle:
            "Ya sea que necesitas un sitio web de WordPress, para poner tu negocio en línea, o una página online de ecommerce más complete, nuestro equipo de desarrollo web, te ayudará a hacer realidad tu visión.",
          services: [
            {
              url: "responsive.svg",
              typeService: "WEB",
              nameService: "Responsive",
              backgroundColor: "#F1EADE",
            },
            {
              url: "google.svg",
              typeService: "WEB",
              nameService: "Optimizada para Google",
              backgroundColor: "#F7D9D9",
            },
            {
              url: "admin.svg",
              typeService: "WEB",
              nameService: "100% Autoadministrable",
              backgroundColor: "#EBE6FB",
            },
            {
              url: "clock.svg",
              typeService: "WEB",
              nameService: "Entrega de 4 a 7 días",
              backgroundColor: "#C9BFC8",
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
              linkDemo: "~",
              linkCheckout: "",
            },
            {
              title: "Diseño Web",
              titleButtonDemo: "Ver Demo",
              titleButtonCheckout: "Consigue tu web",
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
          title:
            "Tenemos 3 planes de Diseño Web, !Elige el que mejor de adapte a tus necesidades¡",
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
                link: "",
              },
              price: "270€ / pago único",
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
                link: "",
              },
              price: "450€ / pago único",
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
                link: "",
              },
              price: "690€ / pago único",
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
      },
    },
  })
}
