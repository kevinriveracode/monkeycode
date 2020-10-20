import React, { Component } from "react"
import { Container, Grid, Image } from "semantic-ui-react"
import "./Footer.scss"

export default function Footer(props) {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <Grid className="footer__grid">
          <Grid.Column
            className="footer__category"
            mobile={16}
            tablet={8}
            computer={5}
          >
            <h6>{"Servicios"}</h6>
            <a href="/dise%C3%B1o-web-profesional"><p>Diseño web</p></a>
            <a href="/diseño-tienda-online"><p>Tiendas Online</p></a>
            <p>Mantenimiento web</p>
          </Grid.Column>
          <Grid.Column
            className="footer__category"
            mobile={16}
            tablet={8}
            computer={5}
          >
            <h6>{"Condiciones generales"}</h6>
            <p>Formas de pago</p>
            <p>Impuestos</p>
            <p>Garantía</p>
            <p>Condiciones generales y de privacidad</p>
            <div className="footer__payments-container">
              <Image
                className="footer__payments payment-mgr-1"
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/visa.svg"
                alt="VISA"
              />

              <Image
                className="footer__payments"
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/targeta.svg"
                alt="TARGETA"
              />
            </div>
          </Grid.Column>
          <Grid.Column
            className="footer__logo"
            mobile={16}
            tablet={16}
            computer={5}
          >
            <Image
              className="footer__logo-svg"
              src="https://monkeycode.s3.eu-west-3.amazonaws.com/logofooter.svg"
              alt="Monkeycode | Tu agencia de diseño web profesional | Construimos tu imagen en internet"
            />
            <h6>Síguenos en RRSS</h6>
            <div className="footer__social-gallery">
              <Image
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/facebook.svg"
                alt="Facebook"
              />
              <Image
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/instagram.svg"
                alt="Instagram"
              />
              <Image
                src="https://monkeycode.s3.eu-west-3.amazonaws.com/linkedin.svg"
                alt="Linkedin"
              />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </footer>
  )
}
