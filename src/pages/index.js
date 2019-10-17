import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>fergworld</h1>
    <p>welcome to my personal website</p>
    <ul>
      <li>I want to use this as:</li>
      <li>creative space to learn more about gatsby</li>
      <li>a place build out a front for my music</li>
      <li>post new demos or single i am working on</li>
      <li>post some drawings that i am working on</li>
      <li>add authentication to access personal/family side of website for wedding photos, dog photos</li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imageName="iceImage" />
    </div>
  </Layout>
)

export default IndexPage
