import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Advantages from "../components/Advantages/Advantages"
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures"
import Examples from "../components/Examples/Examples"

const IndexPage = () => (
  <>
    <SEO title="Diseño web rápido, original y seguro | MonkeyCode" />
    <Header />
    <Banner />
    <Advantages />
    <ServiceFeatures />
    <Examples />
  </>
)

export default IndexPage
