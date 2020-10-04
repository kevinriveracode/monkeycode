import React from "react"
import { Container, Grid } from "semantic-ui-react"
import { map } from "loadsh"
import "./Process.scss"

export default function Process(props) {
  const { title, steps } = props
  return (
    <section className="process">
      <Container>
        <Grid>
          <Grid.Column mobile={16}>
            <h3 className="process_title">NUESTRO PROCESO ES SENCILLO</h3>
          </Grid.Column>
          {map(
            [
              {
                title: "1.Analizamos tus necesidades",
                description:
                  "Estudiamos y analizamos los objetivos de tu negocio, análisis de la presencial online actual de tu empresa y la de tu competencia.",
              },
              {
                title: "2.Propuestas del diseño del sitio web",
                description:
                  "Partiendo del análisis previo definimos los contenidos y elementos necesarios para conseguir una experiencia de usuario encantadora.",
              },
              {
                title: "3.Puesta en marcha",
                description:
                  "Realizamos una revisión completa de tu nueva web, teniendo en cuenta aspectos importantes como el posicionamiento en buscadores y la experiencia de usuario.",
              },
            ],
            entry => (
              <Step info={entry} />
            )
          )}
        </Grid>
      </Container>
    </section>
  )
}
function Step(props) {
  const { title, description } = props.info
  return (
    <Grid.Column className="step" mobile="16" tablet={5} computer={5}>
      <div className="step__container">
        <h6 className="step__title">{title}</h6>
        <p className="step__description">{description}</p>
      </div>
    </Grid.Column>
  )
}
