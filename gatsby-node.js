/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/paginas-web",
    component: require.resolve("./src/pages/index.js"),
    context: {
      title: "Diseño web rápido, original y seguro | MonkeyCode",
    },
  })
}