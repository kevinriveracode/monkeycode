import React from "react"
import { Container, Grid, Image } from "semantic-ui-react"
import { map } from "loadsh"
import "./AllInOne.scss"

export default function AllInOne(props) {
  const featuresList = []
  const { title, features } = props
  return (
    <section className="all-in-one">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Image
                src="http://d1r0i6dbql3qta.cloudfront.net/rocket.svg"
                alt="Proyecto llave en mano"
                className="all-in-one__icon"
              />
              <h3 className="all-in-one__title">{title}</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {map(features, (entry, index) => (
              <Grid.Column mobile={8} computer={5} key={index}>
                <p className="all-in-one__feature">
                  <i class="check icon" />
                  {entry}
                </p>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
