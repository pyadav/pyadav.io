/* eslint-disable jsx-a11y/anchor-is-valid */
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "helpers";
import React from "react";
import Header, { Wrapper, Container } from "components/Header";
import styled from "styled-components";

const Blogs = styled.div``;
const BlogTitle = styled.h2`
  margin-bottom: 1rem;
  line-height: 0.9;
`;

const IndexPage = ({ posts }: any) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Container>
          <Blogs>
            {posts.map(({ data, slug }: any) => {
              return (
                <BlogTitle key={data.title}>
                  <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                    <a>{data.title}</a>
                  </Link>
                </BlogTitle>
              );
            })}
          </Blogs>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      slug: filePath.replace(/\.mdx/, ""),
    };
  });

  return { props: { posts } };
}

export default IndexPage;
