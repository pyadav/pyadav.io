/* eslint-disable @typescript-eslint/ban-ts-comment */
export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const GTMPageView = (url: string) => {
  interface PageEventProps {
    event: string;
    page: string;
  }

  const pageEvent: PageEventProps = {
    event: "pageview",
    page: url,
  };

  //@ts-ignore
  window.dataLayer = window.dataLayer || [];
  //@ts-ignore
  window.dataLayer.push(pageEvent);
  return pageEvent;
};
