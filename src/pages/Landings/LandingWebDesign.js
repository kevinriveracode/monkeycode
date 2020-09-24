import React from "react"
import SEO from "../../components/seo"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Advantages from "../../components/Advantages/Advantages"
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures"
import Examples from "../../components/Examples/Examples"
import SeoMessage from "../../components/SeoMessage/SeoMessage"
import PackContainer from "../../components/PackContainer/PackContainer"
import AllInOne from "../../components/AllInOne/"
import FormContact from "../../components/FormContact/"

export default function IndexPage({ pageContext }) {
  const { titlePage } = pageContext
  return (
    <>
      <SEO title={pageContext.infoLanding.titlePage} />
      <Header />
      <Banner
        title={pageContext.infoLanding.banner.title}
        subtitle={pageContext.infoLanding.banner.subtitle}
        buttonPrimary={pageContext.infoLanding.banner.buttonPrimary}
        buttonSecondary={pageContext.infoLanding.banner.buttonSecondary}
      />
      <Advantages
        title={pageContext.infoLanding.Advantages.title}
        subtitle={pageContext.infoLanding.Advantages.subtitle}
        advantages={pageContext.infoLanding.Advantages.advantages}
        footerTitle={pageContext.infoLanding.Advantages.footerTitle}
        footerButton={pageContext.infoLanding.Advantages.footerButton}
      />
      <ServiceFeatures
        title={pageContext.infoLanding.features.title}
        subtitle={pageContext.infoLanding.features.subtitle}
        services={pageContext.infoLanding.features.services}
      />
      <Examples
        title={pageContext.infoLanding.examples.title}
        demos={pageContext.infoLanding.examples.demos}
      />
      <SeoMessage
        title={pageContext.infoLanding.seoMessage.title}
        description={pageContext.infoLanding.seoMessage.description}
        quote={pageContext.infoLanding.seoMessage.quote}
        author={pageContext.infoLanding.seoMessage.author}
      />
      <PackContainer
        title={pageContext.infoLanding.packs.title}
        packs={pageContext.infoLanding.packs.packs}
      />
      <AllInOne
        title={pageContext.infoLanding.allInOne.title}
        features={pageContext.infoLanding.allInOne.features}
      />
      <FormContact
        title={pageContext.infoLanding.formWeb.title}
        subtitle={pageContext.infoLanding.formWeb.subtitle}
        call={pageContext.infoLanding.formWeb.call}
        email={pageContext.infoLanding.formWeb.email}
      />
    </>
  )
}
