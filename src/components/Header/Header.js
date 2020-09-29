import React from "react"
import { Container, Grid, Image, Header } from "semantic-ui-react"
import "./Header.scss"

export default function HeaderMc(props) {
  return (
    <header className="header">
      <Container className="header__container">
        <Grid columns={2} className="header__grid">
          <Grid.Row className="header__row">
            <Grid.Column mobile={13} className="header__column">
              <a as="a" href="/">
                <Image
                  className="header__logo"
                  src="https://monkeycode.s3.eu-west-3.amazonaws.com/logo-monkeycode.png"
                  alt="Monkeycode | Diseño Web Profesional"
                />
              </a>
            </Grid.Column>
            <Grid.Column
              mobile={3}
              className="header__column header__column--center"
            >
              <Image
                className="header__menu-mobile"
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/menu-white.svg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </header>
  )
}
