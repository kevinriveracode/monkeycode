import React from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import "./Services.scss"
export default function Services(props) {
  const services = [
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/maintance-web.svg",
      title: "DISEÑO WEB Y BLOG",
      description:
        "Nos especializamos en diseñar y crear sitios web únicos para pequeñas y medianas empresas, orientados siempre a los objetivos que se proponga el cliente. ¡No tengas miedo de experimentar!",
      button: {
        title: "Desde 300€",
        link: "/diseño-web-profesional",
      },
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/ecommerce-shop.svg",
      title: "TIENDA ONLINE",
      description:
        "Te ofrecemos la posibilidad de vender en línea, las 24 horas del día, los 7 días de la semana, con una experiencia de usuario encantadora que no encontrarás en ningún otro lugar.",
      button: {
        title: "Desde 500€",
        link: "/diseño-tienda-online",
      },
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/web-shop.svg",
      title: "MANTENIMIENTO WEB",
      description:
        "Si tu sitio web se ve un poco anticuado, se está quedando atrás de la competencia o si aún no tienes uno, entonces nuestro equipo está aquí para ayudarte, Escríbenos.",
      button: {
        title: "Escríbenos",
        link: "/mantenimiento-web",
      },
    },
  ]
  return (
    <section className="services">
      <Container className="services__container">
        <Grid className="services__grid">
          <Grid.Column mobile={16} className="services__title-container">
            <h2>Contrata nuestros servicios de diseño web</h2>
          </Grid.Column>
          {services.map(index => (
            <Service info={index} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

function Service(props) {
  const { image, title, description, button } = props.info
  return (
    <Grid.Column mobile={16} tablet={5} computer={5} className="service">
      <Image src={image} alt={title} className="service__image" />
      <h4 className="service__title">{title}</h4>
      <p className="service__description">{description}</p>
      <Button
        as="a"
        className="service__button"
        href={button.link}
        content={button.title}
      />
    </Grid.Column>
  )
}
