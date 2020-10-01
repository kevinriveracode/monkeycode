import React from "react"
import { Container, Grid, Button } from "semantic-ui-react"
import "./Buy.scss"

export default function Buy(props) {
  return (
    <section className="buy">
      <Container>
        <Grid>
          <Grid.Column mobile={8} className="buy__title-container">
            <h4>Digitalize su negocio en apenas unos dias</h4>
          </Grid.Column>
          <Grid.Column mobile={8} className="buy__button-container">
            <Button
              className="secondary buy__button"
              content="Empieza Ya"
              as="a"
              href=""
            />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
