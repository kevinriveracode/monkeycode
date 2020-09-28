import React, { useState, useEffect } from "react"
import { Container, Grid, Button, Icon, Image } from "semantic-ui-react"
import { loadStripe } from "@stripe/stripe-js"
import Header from "../../components/Header"
import "./ProductWeb.scss"
const stripePromise = loadStripe(
  "pk_test_51HWHRmHTnDUNNyj1WnUWdywxldZ5REcniBlDGqD85nuoyU9p327p9IC31lqVB9QuP1sfm7H4eYRrW1mAryfS5OzJ00cwgqIs7v"
)

export default function ViewPackBasic(props) {
  const [message, setMessage] = useState("")
  const infoPage = {
    image: "https://monkeycode.s3.eu-west-3.amazonaws.com/image.png",
    title: "PACK IBIZA",
    price: "450.00 €",
    description:
      "Diseañamos y desarrollamos sitios web que sean referencia en tu sector. Te brindamos una potente herramienta que te ayudara a reforzar la imagen de tu negocio y te ayudara a captar nuevos clientes. Sera visualmente espectacular, con mensajes publicitarios que impacten. Es una web completa porque la podras gestionar facilmente, podras editar contenidos, editar secciones y mucho más.",
    urlCheckout: "http://localhost:3000/create-session",
  }
  useEffect(() => {
    // Check to see if this is a redirect back from checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get("success")) {
      setMessage("Orden placed!! Todo perfecto")
    }
    if (query.get("canceled")) {
      setMessage("Order canceled")
    }
  }, [])
  async function handleClick(ev) {
    const stripe = await stripePromise
    const response = await fetch(infoPage.urlCheckout, {
      method: "post",
    })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }

  return (
    <>
      <Header />
      <section className="product">
        <Container>
          <Grid columns={16}>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image src={infoPage.image} alt={infoPage.title} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h1 className="product__title">{infoPage.title}</h1>
              <p className="product__price">{infoPage.price}</p>
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <span className="product__sub">
                (Recomendado por nuestros clientes)
              </span>
              <p className="product__description">{infoPage.description}</p>
              <Button
                className="product__button"
                onClick={handleClick}
                content="Comprar"
              />
            </Grid.Column>
            <Grid.Column className="steps" className="first-steps" mobile={16}>
              <h3>Primeros pasos</h3>
            </Grid.Column>
            <Grid.Column mobile={16} className="steps">
              <div className="step-container">
                <p className="step">Realizas el pedido con targeta</p>
                <div className="step-point" />
              </div>
            </Grid.Column>
            <Grid.Column className="steps" mobile={16}>
              <div className="step-container">
                <p className="step">Rellenas el cuestionario que te enviamos</p>
                <div className="step-point" />
              </div>
            </Grid.Column>
            <Grid.Column className="steps" mobile={16}>
              <div className="step-container">
                <p className="step">
                  Trabajamos sobre un prototipo que podras ver online
                </p>
                <div className="step-point" />
              </div>
            </Grid.Column>
            <Grid.Column className="steps" mobile={16}>
              <div className="step-container">
                <p className="step">
                  Cuando estés satisfecho, lanzamos tu proyecto a internet
                </p>
                <div className="step-point" />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    </>
  )
}
