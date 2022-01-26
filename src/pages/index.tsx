import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '@/components/layout'
import { Container, Row, Col, Carousel } from "react-bootstrap"

// markup
const IndexPage = () => {
  const pageTitle = 'Hello Gatsby'

  return (
    <Layout pageTitle={pageTitle}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xxl={6}>
            <Carousel>
              {
                Array(3).fill('').map((_, idx) => (
                  <Carousel.Item key={`main-carousel-${idx}`}>
                    <StaticImage
                      alt="banner image"
                      src="https://picsum.photos/1280/720"
                    />
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </Col>
        </Row>
        <Row className="my-4 my-xl-5">
          <Col>
            <h2>{pageTitle}</h2>
            <p>It is site by following <a href="https://www.gatsbyjs.com/docs/tutorial">The Gatsby Tutorial</a></p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
