import React, { FC } from "react";
import { Link, graphql, PageProps } from "gatsby";
import { AllBlogPostQuery } from "types/graphql-types";

import Layout from "@/components/layout";

const BlogPage: FC<PageProps<AllBlogPostQuery>> = ({ data }): any => {
  const articles = data.allMdx.nodes
  return (
    <Layout pageTitle="Blog">
      {articles.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>
              {node?.frontmatter?.title}
            </Link>
          </h2>
          <p>Posted on {node?.frontmatter?.date}</p>
        </article>
      ))}
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
