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
                <h3 className="header__title-site">
                  MONKEY<span>CODE</span>
                </h3>
              </a>
            </Grid.Column>
            <Grid.Column
              mobile={3}
              className="header__column header__column--center"
            >
              <Image
                className="header__menu-mobile"
                src="http://d1r0i6dbql3qta.cloudfront.net/menu.svg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </header>
  )
}
