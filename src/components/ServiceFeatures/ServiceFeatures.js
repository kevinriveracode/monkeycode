import React from "react"
import { Container, Grid, Image } from "semantic-ui-react"
import { map } from "loadsh"
import "./ServiceFeatures.scss"

export default function ServiceFeatures(props) {
  const { title, subtitle, services } = props

  return (
    <section className="service-features">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2 className="service-features__title">{title}</h2>
              <h3 className="service-features__subtitle">{subtitle}</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="service-features__features-container">
            {map(services, (item, index) => (
              <Grid.Column
                mobile={8}
                className="service-features__container-block"
              >
                <Feature
                  key={index}
                  url={item.url}
                  typeService={item.typeService}
                  nameService={item.nameService}
                  backgroundColor={item.backgroundColor}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function Feature(props) {
  const { url, typeService, nameService, backgroundColor } = props
  return (
    <Grid className="feature" style={{ backgroundColor }}>
      <Grid.Row>
        <Grid.Column mobile={16} className="feature__image-container">
          <div>
            <Image src={`/img/${url}`} />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16}>
          <span className="feature__service">{typeService}</span>
          <h6 className="feature__name">{nameService}</h6>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
