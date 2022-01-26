import * as React from "react"
import {StaticImage} from 'gatsby-plugin-image'

import Layout from '@/components/layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Hello Gatsby">
      <section>
        <StaticImage
          alt="banner image"
          src="https://picsum.photos/720/360"
        />
      </section>
      <section>
        <p>It is site by following <a href="https://www.gatsbyjs.com/docs/tutorial">The Gatsby Tutorial</a></p>
      </section>
    </Layout>
  )
}

export default IndexPage
