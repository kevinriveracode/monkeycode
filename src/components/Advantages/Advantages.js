import React from "react"
import { Grid, Container, Image, Button } from "semantic-ui-react"
import { map } from "loadsh"
import "./Advantages.scss"

export default function Advantages(props) {
  const { title, subtitle, advantages, footerTitle, footerButton } = props

  return (
    <section className="advantages">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2 className="advantages__title">{title}</h2>
              <h3 className="advantages__subtitle">{subtitle}</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="advantages__container-items">
            <Grid.Column mobile={16}>
              {map(advantages, (item, index) => (
                <AdvantageItem
                  key={index}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} className="advantages__footer">
              <h5 className="advantages__title">
                Contrata hoy mismo tu página web
              </h5>
              <Button as="a" className="advantages__button">
                ¿EMPEZAMOS?
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function AdvantageItem(props) {
  const { url, title, description } = props

  return (
    <Grid className="advantage-item">
      <Grid.Row>
        <Grid.Column mobile={2} className="advantage-item__container-image">
          <Image className="advantage-item__icon" src={url} />
        </Grid.Column>
        <Grid.Column mobile={14} className="advantage-item__container-info">
          <h4 className="advantage-item__title">{title}</h4>
          <p className="advantage-item__description">{description}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
