import React from "react"
import { Container, Grid, Header, Button, Image } from "semantic-ui-react"
import "./Banner.scss"

export default function Banner(props) {
  const { title, subtitle, buttonPrimary, buttonSecondary, imageLink } = props
  const backgroundImage = "/public/banner/diseño-web-bg.png"
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url("http://d1r0i6dbql3qta.cloudfront.net/dise%C3%B1o-web-banner-bg+.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="banner__container">
        <Grid>
          <Grid.Column mobile={16} computer={8}>
            <h1 className="banner__primary-title">{title}</h1>
            <h3 className="banner__secondary-title">{subtitle}</h3>
            <div className="banner__container-buttons">
              <Button
                as="a"
                href={buttonPrimary.link}
                className="banner__container-buttons banner__container-buttons--button-primary"
              >
                {buttonPrimary.title}
              </Button>
              <Button
                as="a"
                href={buttonSecondary.link}
                className="banner__container-buttons banner__container-buttons--button-secondary"
              >
                {buttonSecondary.title}
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column
            className="banner__image-container"
            mobile={16}
            computer={8}
          >
            <Image className="banner__optional-image" src={imageLink} />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
