import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./SeoMessage.scss"

export default function ServiceWorkerMessageEvent(props) {
  return (
    <section className="seo-message">
      <Container>
        <Grid.Row>
          <Grid.Column className="seo-message__container-title">
            <h2 className="seo-message__title">
              CONTRATA NUESTROS SERVICIOS Y AUMENTA LAS CONVERSIONES
            </h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p className="seo-message__subtitle">
              En MonkeyCode nos especializamos en diseñar marcas reconocidas y
              desarrollar sitios web que cumplan con los estándares W3C, siendo
              compatibles con los dispositivos más recientes. Además contamos
              con un grupo de diseñadores y desarrolladores web profesioneles,
              dedicados a crear sitios web potente, efectivos y atractivos.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div className="seo-message__message">
              <p className="text">
                “Una buena presencia online, repercutirá en un aumento de la
                conversión de tus clientes, un aumento de la facturación y un
                mayor público.”
              </p>
              <p className="quote">KEVIN RIVERA - SEO MONKEYCODE</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </section>
  )
}
