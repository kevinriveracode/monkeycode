import React from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import "./Examples.scss"

export default function Examples(props) {
  return (
    <section className="examples">
      <Container>
        <Grid>
          <Grid.Row className="examples__container-title">
            <h2 className="examples__title">
              Echa un ojos a nuestras ejemplos
            </h2>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} className="examples__container-demo">
              <Demo />
              <Demo />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function Demo(props) {
  return (
    <Grid.Row className="demo">
      <Grid.Column mobile={16}>
        <h6>Diseño Web</h6>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Image src="" alt="" className="demo__image" />
      </Grid.Column>
      <Grid.Column mobile={16} className="demo__container-buttons">
        <Button
          content="Ver Demo"
          className="demo__button demo__button--secondary"
        />
        <Button
          content="Consigue tu web"
          className="demo__button demo__button--primary"
        />
      </Grid.Column>
    </Grid.Row>
  )
}
