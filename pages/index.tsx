import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "helpers";

const IndexPage = ({ posts }: any) => {
  return (
    <>
      <ul>
        {posts.map((post: any) => (
          <li key={post.filePath}>
            <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
              <span>{post.data.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default IndexPage;
