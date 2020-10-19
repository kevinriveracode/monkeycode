import React from "react"
import { map } from "loadsh"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import "./Examples.scss"

export default function Examples(props) {
  const { title, demos } = props

  return (
    <section className="examples">
      <Container fluid>
        <Grid>
          <Grid.Row className="examples__container-title">
            <h2 className="examples__title">{title}</h2>
          </Grid.Row>
          <Grid.Row>
            {map(demos, (entry, index) => (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}
                className="examples__container-demo"
              >
                <Demo
                  title={entry.title}
                  titleButtonDemo={entry.titleButtonDemo}
                  titleButtonCheckout={entry.titleButtonCheckout}
                  urlImageDemo={entry.urlImageDemo}
                  linkDemo={entry.linkDemo}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}

function Demo(props) {
  const { title, titleButtonCheckout, titleButtonDemo, urlImageDemo, linkDemo } = props
  return (
    <Grid.Row className="demo">
      <Grid.Column mobile={16}>
        <h6 className="demo__title">{title}</h6>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Image src={urlImageDemo} alt="" className="demo__image" />
      </Grid.Column>
      <Grid.Column mobile={16} className="demo__container-buttons">
        <Button
          content={titleButtonDemo}
          as="a"
          href={linkDemo}
          className="demo__button demo__button--secondary"
        />
        <Button
          content={titleButtonCheckout}
          className="demo__button demo__button--primary"
        />
      </Grid.Column>
    </Grid.Row>
  )
}
