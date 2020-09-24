import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header"

export default function IndexPage({ pageContext }) {
  const { titlePage } = pageContext
  return (
    <>
      <SEO title="Main-page" />
      <Header />
      <a href="/diseño-web-profesional">Landing Web</a>
    </>
  )
}
