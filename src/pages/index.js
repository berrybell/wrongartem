import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const lastTime = null
  return (
    <Layout>
      <SEO title="Wrong Artem" />
      <h2>The last time wrong Artem was tagged in a work chat was</h2>
      <h1>
        {lastTime ? lastTime : "some time ago (we don't know exactly when)"}
      </h1>
      <p>In total, wrong Artem was tagged a lot of times.</p>
    </Layout>
  )
}

export default IndexPage
