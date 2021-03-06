import React from "react"
import { Container, Grid, Button } from "semantic-ui-react"
import "./Buy.scss"

export default function Buy(props) {
  return (
    <section className="buy">
      <Container>
        <Grid>
          <Grid.Column
            verticalAlign="middle"
            computer={8} mobile={16} tablet={8}
            className="buy__title-container"
          >
            <h4>Digitalize su negocio en apenas unos días</h4>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16} tablet={8} className="buy__button-container">
            <Button
              className="secondary buy__button"
              content="Escríbenos"
              as="a"
              href="/contacto"
            />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
