import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { AllBlogPostQuery } from "types/graphql-types";

import Layout from "@/components/layout";
import { Col, Container, Row } from "react-bootstrap";

const BlogPage: React.FC<PageProps<AllBlogPostQuery>> = ({ data }): any => {
  const articles = data.allMdx.nodes
  return (
    <Layout pageTitle="Blog">
      <Container>
        <Row className="my-4">
          <Col>
            <h2 className="fw-bolder">Blog</h2>
            <p>Check blog articles</p>
          </Col>
        </Row>
        <Row>
          {articles.map((node, idx, list) => (
            <Col xs={12} key={node.id}>
              <article>
                <h4>
                  <Link to={`/blog/${node.slug}`} className="text-reset text-decoration-none">
                    {node?.frontmatter?.title}
                  </Link>
                </h4>
                <p className="text-muted">Posted on {node?.frontmatter?.date}</p>
              </article>
              {
                idx < list.length - 1 ?
                  <hr className="bg-dark bg-opacity-25" /> :
                  null
              }
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query AllBlogPost {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY. MM. DD")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
