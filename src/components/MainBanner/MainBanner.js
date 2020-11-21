import React from "react"
import { Container, Grid, Image } from "semantic-ui-react"
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
              src="https://monkeycode.s3.eu-west-3.amazonaws.com/startflyhd.jpg"
              alt="diseño web valencia"
            />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="main-banner__page-info"
          >
            <div>
              <h1 className="main-banner__title">DISEÑO DE PÁGINAS WEB PROFESIONALES</h1>
              <p className="main-banner__description">
                Si estás buscando una empresa de desarrollo web de primer nivel, 
                para diseñar y construir una página web única, totalmente funcional, 
                fácil de usar y que genere ingresos, entonces somos la solución. 
                ¡Éste es el lugar perfecto para ti!
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
