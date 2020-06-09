import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { logs } from "../components/logs"

const IndexPage = () => {
  const lastTime = logs[logs.length - 1]
  return (
    <Layout>
      <SEO title="Wrong Artem" />
      <h2>The last time wrong Artem was tagged in a work chat was</h2>
      <h1>
        {lastTime
          ? lastTime.toDateString()
          : "some time ago (we don't know exactly when)"}
      </h1>
      <p>In total, wrong Artem was tagged {logs.length} times.</p>
    </Layout>
  )
}

export default IndexPage
