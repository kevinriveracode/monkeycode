import React from "react"
import { Container, Grid, Button, Image } from "semantic-ui-react"
import "./Banner.scss"

export default function Banner(props) {
  const { title, subtitle, buttonPrimary, buttonSecondary, imageLink, backgroundImage} = props
  
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
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
              {
                typeof buttonPrimary !== 'undefined' && (
                  <Button
                    as="button"
                    className="banner__container-buttons banner__container-buttons--button-primary"
                    onClick={() => window.document.getElementById("packs").scrollIntoView({
                      behavior: 'smooth'
                    })}
                  >
                    {buttonPrimary.title}
                  </Button>
                )
              }
              {
                typeof buttonSecondary !== 'undefined' && (
                  <Button
                    as="a"
                    href={buttonSecondary.link}
                    className="banner__container-buttons banner__secondary "
                  >
                    {buttonSecondary.title}
                  </Button>
                )
              }
              
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
