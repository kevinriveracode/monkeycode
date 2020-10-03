import React from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"
import "./Info.scss"
export default function Info(props) {
  const {
    title,
    subtitle,
    description,
    advantages,
    buttons,
    image,
    background,
    reverse,
  } = props.data
  return (
    <section className="info" style={{ background }}>
      <Container fluid className="info__container">
        <Grid className={`info__grid ${reverse ? "info__grid--reverse" : ""}`}>
          <Grid.Column
            className="info__article-container"
            mobile={16}
            computer={8}
            verticalAlign="middle"
          >
            <article className="info__article">
              <h2 className="info__title">{title}</h2>
              <h4 className="info__subtitle">{subtitle}</h4>
              <p className="info__description">{description}</p>
              <ul className="info__advantages">
                {advantages.map(entry => (
                  <p className="info__feature">
                    <li className="info__advantage-item">
                      <i as="span" className="check icon" />
                      {entry}
                    </li>
                  </p>
                ))}
              </ul>
              <div className="info__btn-container">
                {buttons.map(entry => (
                  <Button
                    className={entry.style}
                    content={entry.title}
                    as="a"
                    href={entry.link}
                  />
                ))}
              </div>
            </article>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="info__image-container"
          >
            <Image src={image} className="info__image" alt={title} />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}
