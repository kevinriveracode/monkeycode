import React from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import TextLoop from "react-text-loop"

import "./MainBanner.scss"

export default function MainBanner(props) {
  return (
    <section className="main-banner">
      <Container fluid className="main-banner__container">
        <Grid className="main-banner__content">
          <Grid.Column
            className="main-banner__image-container"
            mobile={16}
            tablet={16}
            computer={8}
          >
            <Image
              className="main-banner__image"
              src="https://monkeycode.s3.eu-west-3.amazonaws.com/home-banner.png"
              alt=""
            />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="main-banner__page-info"
          >
            <div>
              <h1 className="main-banner__title">
                Diseñamos tu producto digital
              </h1>
              <p className="main-banner__description">
                Somos una agencia de diseño web. Ayudamos a empresas grandes y
                pequeñas diseñando logos de alto nivel, desarrollando webs que
                nunca se olvidan y tiendas que venden. Tejemos redes sociales
                que conectan, hacemos SEO del bueno, bonito y barato.
              </p>
              <Button
                className="main-banner__button"
                secondary
                content="Empieza ya"
              />
              <Button secondary content="Mas información" />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
