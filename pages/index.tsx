/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import {
  postFilePaths,
  getPostFilePathData,
  isPostPublished,
  sortByField,
} from "helpers";

import React from "react";
import { Wrapper, Header, Subtitle, Title, Updated } from "components/Page";
import { title, description } from "constant";
import styled from "styled-components";

const PostList = styled.div``;
const PostTitle = styled.h3`
  margin-bottom: 1rem;
  line-height: 0.9;
`;
const PostDescription = styled.div``;

const DateComponents = ({ value = new Date() }: any) => {
  const postedDate = new Date(value).toDateString();
  return <span>{postedDate}</span>;
};

const Tag = ({ slug }: any) => {
  return <span>{slug} &nbsp; </span>;
};

const Post = ({ data: { data, slug } }: any) => (
  <React.Fragment>
    <PostTitle>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <a>{data.title}</a>
      </Link>
    </PostTitle>
    <PostDescription>
      {data?.tags.map((tag: any) => (
        <Tag key={tag} slug={tag} />
      ))}
      <DateComponents value={data.published} />
    </PostDescription>
  </React.Fragment>
);

const IndexPage = ({ posts }: any) => {
  return (
    <>
      {/* SEO tag container */}
      <Header>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </Header>
      <Wrapper>
        <PostList>
          {posts.map((postContent: any) => (
            <Post key={postContent.slug} data={postContent} />
          ))}
        </PostList>
      </Wrapper>
    </>
  );
};

export function getStaticProps() {
  const posts = postFilePaths
    .map(getPostFilePathData)
    .filter(
      process.env.NODE_ENV === "production" ? isPostPublished : () => true,
    )
    .sort(sortByField("published"));
  return { props: { posts } };
}

export default IndexPage;
