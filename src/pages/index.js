import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ paddingLeft: "12px" }}>
      <h1>Hello Everyone! :)</h1>
      <p>Welcome to my new website!</p>
      <p>Let's learn something new today</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </div>
  </div>
)

export default IndexPage
