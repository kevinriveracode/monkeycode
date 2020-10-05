exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/diseño-web-profesional",
    component: require.resolve("./src/pages/Landings/LandingWebDesign.js"),
  })
  createPage({
    path: "/diseño-tienda-online",
    component: require.resolve("./src/pages/Landings/LandingTiendaOnline.js"),
  })
  createPage({
    path: "/product/pack-valencia",
    component: require.resolve("./src/pages/Products/ProductWebBasic.js"),
  })
  createPage({
    path: "/product/pack-ibiza",
    component: require.resolve("./src/pages/Products/ProductWebMedium.js"),
  })
  createPage({
    path: "/product/diseño-web-pack-mallorca",
    component: require.resolve("./src/pages/Products/ProductWebPremium.js"),
  })
}
