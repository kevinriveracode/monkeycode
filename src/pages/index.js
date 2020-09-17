import React from "react"
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Advantages from '../components/Advantages/Advantages';
import ServiceFeatures from '../components/ServiceFeatures/ServiceFeatures';
import SEO from "../components/seo"

const IndexPage = () => (
  <>
       <SEO title="Diseño web rápido, original y seguro | MonkeyCode" />
       <Header />
       <Banner />
       <Advantages />
       <ServiceFeatures/>
  </>
)

export default IndexPage
