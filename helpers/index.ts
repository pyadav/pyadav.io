import fs from "fs";
import path from "path";
import matter from "gray-matter";
// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "contents");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const pipe = (...fns: any) => (data: any) => {
  return fns.reduce(
    (currentValue: any, currentFunc: any) => currentFunc(currentValue),
    data,
  );
};

export function isPostPublished({ data: { published = false } }) {
  return !!published;
}

export function sortByField(fieldName: string) {
  return (
    { data: { [fieldName]: AfieldName } }: any,
    { data: { [fieldName]: BfieldName } }: any,
  ) => AfieldName - BfieldName;
}
/**
 *  Get data information of all marked posts in POSTS_PATH
 *
 * @export
 * @param {string} filePath - file path of markedown file
 * @returns {Object} File information object
 */
export function getPostFilePathData(filePath: string) {
  const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
  const { content, data } = matter(source);
  return {
    content,
    data,
    slug: filePath.replace(/\.mdx/, ""),
  };
}
