import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'
import { BlogPostQuery } from "types/graphql-types";

import Layout from "@/components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost: FC<PageProps<BlogPostQuery>> = ({ data }): any => {
  const mdx = data?.mdx

  //  x.childImageSharp.gatsbyImageData is same as getImage 
  //  @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#getimage
  const bannerImage = mdx?.frontmatter?.banner_image?.childImageSharp?.gatsbyImageData

  return (
    <Layout pageTitle={mdx?.frontmatter?.title}>
      <div>
        {
          // require check bannerImage not null | undefined
          // @See https://github.com/gatsbyjs/gatsby/issues/31070
          bannerImage ? <GatsbyImage image={bannerImage} alt="banner image" /> : null
        }
      </div>
      <MDXRenderer>{mdx?.body ?? ''}</MDXRenderer>
      <p>writed on {mdx?.frontmatter?.date}</p>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost ($id: String) {
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
