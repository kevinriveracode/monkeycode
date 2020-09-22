import React from "react"
import { Container, Grid } from "semantic-ui-react"
import { map } from "loadsh"
import "./AllInOne.scss"

export default function AllInOne(props) {
  const featuresList = [
    " PROYECTOS LLAVE EN MANO",
    " CREACIÓN DE CUENTAS DE CORREO ELECTRONICO",
    " ADAPTACIÓN A IDENTIDAD CORPORATIVA",
    " DERECHOS DE PROPIEDAD INTELECTUAL",
    " INSTALACIÓN EN TU SERVIDOR",
    " FORMULARIOS DE CONTACTO",
  ]
  return (
    <section className="all-in-one">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h3 className="all-in-one__title">
                TODOS NUESTROS PACKS INCLUYEN
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {map(featuresList, (entry, index) => (
              <Grid.Column mobile={8}>
                <p className="all-in-one__feature">
                  <i class="check icon"></i>
                  {entry}
                </p>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  )
}
