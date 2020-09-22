import React from "react"
import { Container, Grid, Button } from "semantic-ui-react"
import "./PackContainer.scss"

export default function PackContainer(props) {
  return (
    <section className="pack-container">
      <Container>
        <Grid>
          <Grid.Row className="pack-container__container-title">
            <h3 className="pack-container__title">
              Tenemos 3 planes de Diseño Web, !Elige el que mejor de adapte a
              tus necesidades¡
            </h3>
          </Grid.Row>
          <Grid.Row className="pack-container__container-packs">
            <Pack />
            <Pack />
            <Pack />
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function Pack(props) {
  return (
    <Grid.Column className="pack" mobile={16}>
      <Grid.Row className="pack__container">
        <Grid.Column className="pack__header">
          <h6>
            PACK <span>VALENCIA</span>
          </h6>
        </Grid.Column>
        <Grid.Column className="pack__body">
          <ul>
            <li>Diseño unico y original</li>
            <li>Diseño unico y original</li>
            <li>Diseño unico y original</li>
            <li>Diseño unico y original</li>
            <li>Diseño unico y original</li>
          </ul>
        </Grid.Column>
        <Grid.Column className="pack__footer">
          <p>450 €</p>
        </Grid.Column>
        <Grid.Column className="pack__other">
          <Button content="Activar" />
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  )
}
