import * as React from "react"
import Layout from '@/components/layout'
import { Col, Container, Row } from "react-bootstrap"

const AboutPage = () => {
  const pageTitle = 'About Me'
  return (
    <Layout pageTitle={pageTitle}>
      <Container>
        <Row className="my-4 my-xl-5">
          <Col>
            <h2>{pageTitle}</h2>
            <section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad quia iusto, in neque maxime unde explicabo quos corporis architecto deleniti, consequuntur sapiente facilis tempora animi blanditiis eveniet omnis libero.</p>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage