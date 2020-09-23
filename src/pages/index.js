import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Advantages from "../components/Advantages/Advantages"
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures"
import Examples from "../components/Examples/Examples"
import SeoMessage from "../components/SeoMessage/SeoMessage"
import PackContainer from "../components/PackContainer/PackContainer"
import AllInOne from "../components/AllInOne/"
import FormContact from "../components/FormContact/"

export default function IndexPage({ pageContext }) {
  const { title } = pageContext

  return (
    <>
      <SEO title={title} />
      <Header />
      <Banner />
      <Advantages />
      <ServiceFeatures />
      <Examples />
      <SeoMessage />
      <PackContainer />
      <AllInOne />
      <FormContact />
    </>
  )
}
