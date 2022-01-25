import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "@/components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.banner_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <p>writed on {data.mdx.frontmatter.date}</p>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD")
        banner_image {
          childImageSharp{
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
