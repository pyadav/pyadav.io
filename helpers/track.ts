/* eslint-disable @typescript-eslint/ban-ts-comment */
type DataEvent = {
  event: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
};

const track = (data: DataEvent): void => {
  //@ts-ignore
  window.dataLayer = window.dataLayer || [];
  //@ts-ignore
  window.dataLayer.push(data);
};

export default track;
