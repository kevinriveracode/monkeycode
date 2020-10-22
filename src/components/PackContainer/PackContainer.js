import React from "react"
import { Container, Grid, Button, Image } from "semantic-ui-react"
import { map } from "loadsh"
import "./PackContainer.scss"

export default function PackContainer(props) {
  const { title, packs } = props

  return (
    <section className="pack-container" id="packs">
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
  const {
    name,
    features,
    button,
    price,
    backgroundColor,
    link,
  } = props.dataPack

  return (
    <Grid.Column className="pack" mobile={16} tablet={16} computer={5}>
      <Grid.Row className="pack__container">
        <Grid.Column className="pack__header" style={{ backgroundColor }}>
          <Image
            src="https://monkeycode.s3.eu-west-3.amazonaws.com/pack.svg"
            className="pack__icon"
          />
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
          <p>
            {price}/<span className="pack__price">pago único</span>
          </p>
        </Grid.Column>
        <Grid.Column className="pack__other">
          <Button as="a" href={button.link} content="Activar" />
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  )
}
