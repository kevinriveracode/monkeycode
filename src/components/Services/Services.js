import React from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import "./Services.scss"
export default function Services(props) {
  const services = [
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/Service+(2).svg",
      title: "DISEÑO WEB Y BLOG",
      description: "Diseño y programación de web o blog",
      button: {
        title: "Desde 250€",
        link: "/diseño-web-profesional",
      },
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/Component+2.svg",
      title: "TIENDA ONLINE",
      description: "Diseño y programación de tiendas online",
      button: {
        title: "Desde 450€",
        link: "",
      },
    },
    {
      image: "https://monkeycode.s3.eu-west-3.amazonaws.com/mantenimiento.svg",
      title: "Mantenimiento Web",
      description: "Mantenimiento de tu página web",
      button: {
        title: "Desde 450€",
        link: "+ información",
      },
    },
  ]
  return (
    <section className="services">
      <Container className="services__container">
        <Grid className="services__grid">
          <Grid.Column mobile={16} className="services__title-container">
            <h2>TENEMOS LO QUE NECESITAS</h2>
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
    <Grid.Column mobile={16} tablet={5} className="service">
      <Image src={image} alt="" className="service__image" />
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
