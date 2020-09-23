import React from "react"
import { Container, Grid, Button } from "semantic-ui-react"
import { map } from "loadsh"
import "./PackContainer.scss"

export default function PackContainer(props) {
  const { title, packs } = props

  return (
    <section className="pack-container">
      <Container>
        <Grid>
          <Grid.Row className="pack-container__container-title">
            <h3 className="pack-container__title">{title}</h3>
          </Grid.Row>
          <Grid.Row className="pack-container__container-packs">
            {map(packs, (entry, index) => (
              <Pack key={index} dataPack={entry} />
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function Pack(props) {
  const { name, features, button, price, backgroundColor } = props.dataPack

  return (
    <Grid.Column className="pack" mobile={16}>
      <Grid.Row className="pack__container">
        <Grid.Column className="pack__header" style={{ backgroundColor }}>
          <h6>
            PACK <span>{name}</span>
          </h6>
        </Grid.Column>
        <Grid.Column className="pack__body">
          <ul>
            {map(features, (entry, index) => (
              <li key={index}>
                {" "}
                <i class="check icon" />
                {entry}
              </li>
            ))}
          </ul>
        </Grid.Column>
        <Grid.Column className="pack__footer">
          <p>{price}</p>
        </Grid.Column>
        <Grid.Column className="pack__other">
          <Button content="Activar" />
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  )
}
