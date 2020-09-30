import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import MainBanner from "../components/MainBanner"
import Services from "../components/Services"
import TopButton from "../components/TopButton"
import Footer from "../components/Footer"

export default function IndexPage({ pageContext }) {
  const { titlePage } = pageContext
  return (
    <>
      <SEO title="Monkeycode | Agencia de diseño web profesional, rapido y seguro" />
      <Header />
      <MainBanner />
      <Services />
      <Footer />
      <TopButton />
    </>
  )
}
