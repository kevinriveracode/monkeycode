import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./SeoMessage.scss"

export default function ServiceWorkerMessageEvent(props) {
  const { title, description, quote, author } = props

  return (
    <section className="seo-message">
      <Container>
        <Grid.Row>
          <Grid.Column className="seo-message__container-title">
            <h2 className="seo-message__title">{title}</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p className="seo-message__subtitle">{description}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="seo-message__container-row">
          <Grid.Column className="seo-message__container-quote">
            <div className="seo-message__message">
              <p className="text">{quote}</p>
              <p className="quote">{author}</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </section>
  )
}
