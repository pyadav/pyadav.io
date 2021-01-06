/* eslint-disable jsx-a11y/anchor-is-valid */
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Link from "next/link";
import path from "path";
import readingTime from "reading-time";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { postFilePaths, POSTS_PATH } from "helpers";
import { Wrapper, Container } from "components/Header";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  h1: ({ children }: any) => <div>{children}</div>,
};

export default function PostPage({ source, frontMatter }: any) {
  const content = hydrate(source, { components });

  return (
    <Wrapper>
      <Container>
        <header>
          <nav>
            <Link href="/">
              <a>Go back home</a>
            </Link>
          </nav>
        </header>
        <div className="post-header">
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && <p className="description">{frontMatter.description}</p>}
        </div>
        <main>{content}</main>
      </Container>
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require("remark-containers"), require("remark-capitalize"), require("remark-autolink-headings")],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime: readingTime(content),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
