import * as React from "react";
import { graphql } from "gatsby";

import Layout from "@/components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
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
      }
      body
    }
  }
`;

export default BlogPost;
