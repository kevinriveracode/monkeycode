import React from "react"
import { Container, Grid, Image, Header } from "semantic-ui-react"
import "./Header.scss"

export default function HeaderMc(props) {
  return (
    <header className="header">
      <Container className="header__container">
        <Grid columns={2} className="header__grid">
          <Grid.Row className="header__row">
            <Grid.Column
              mobile={12}
              tablet={6}
              computer={4}
              className="header__container-logo"
            >
              <a as="a" href="/">
                <Image
                  className="header__logo"
                  src="https://monkeycode.s3.eu-west-3.amazonaws.com/logostartfly.svg"
                  alt="Monkeycode | Diseño Web Profesional"
                />
              </a>
            </Grid.Column>
            <Grid.Column
              mobile={4}
              tablet={10}
              computer={12}
              className="header__column header__column--center"
            >
              <Image
                className="header__menu-mobile"
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/nav-mobile-white.svg"
              />
              <nav className="header__menu-desktop">
                <ul className="header__menu-desktop-container">
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/dise%C3%B1o-web-profesional">Diseño web</a>
                  </li>
                  <li>
                    <a href="/diseño-tienda-online">Tiendas Online</a>
                  </li>
                  <li>
                    <a href="/">A medida</a>
                  </li>
                  <li>
                    <a href="/">Contacto</a>
                  </li>
                </ul>
              </nav>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </header>
  )
}
