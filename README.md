## iamyadav.com

- Pages with Dynamic Routes
- Pre-rendering
  https://nextjs.org/docs/basic-features/pages

  1. Static Generation at build time with data on server side:

  content depend on external data:: ` export async function getStaticProps() {}`
  page paths depend on external data :: `export async function getStaticPaths() {}`

  => Incremental Static Regeneration
  => Pre-rendering some parts of a page and then use client-side JavaScript to populate them.
  => Reading files `fs.readdirSync`
  => fallback `true` for enabling static page generation

  2. SSR Generation on each request
     `export async function getServerSideProps() {}` same as getStaticProps but run on each request
