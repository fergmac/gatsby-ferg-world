import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Discography = () => (
  <Layout>
    <SEO title="Discography" />
    <h1>Discography</h1>
    <ul style={{ maxWidth: `300px`, marginBottom: `1.45rem`, listStyle: 'none', marginLeft: '0' }}>
      <li><Image imageName="iceCatImage" /></li>
      <li><Image imageName="iceImage" /></li>
    </ul>
  </Layout>
)

export default Discography
