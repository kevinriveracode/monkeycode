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
        backgroundImage: `url("http://drive.google.com/uc?export=view&id=1jrFchP1VUmSjlLfkV0zOLoGBT_Tv-zr1")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="banner__container">
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column mobile={16}>
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
              <Image className="banner__optional-image" src={imageLink} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
