/* eslint-disable jsx-a11y/anchor-is-valid */
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "helpers";
import React from "react";
import Header, { Wrapper, Container } from "components/Header";

const IndexPage = ({ posts }: any) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Container>
          <ul>
            {posts.map(({ data, slug }: any) => {
              return (
                <li key={data.title}>
                  <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                    <a>{data.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
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
