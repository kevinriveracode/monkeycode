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
                title: "Análisis",
                description:
                  "Definimos tus objetivos a lograr y planeamos una marco inicial u hoja de ruta del proyecto.",
              },
              {
                title: "Estrategia",
                description:
                  "Estudiamos y planeamos la estrategia óptima para lograr tus objetivos",
              },
              {
                title: "Puesta en marcha",
                description:
                  "Estudiamos y planeamos la estrategia óptima para lograr tus objetivos",
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
