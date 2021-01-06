import { GTM_ID } from "helpers/gtm";

export default () => (
  <noscript>
    <iframe
      title="gtm"
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
);
