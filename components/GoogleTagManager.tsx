import { useEffect } from "react";
import { useRouter } from "next/router";
import { GTMPageView } from "helpers/gtm";

const handleRouteChange = (url: string) => GTMPageView(url);
const GoogleTagManager = ({ children }: any) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return children;
};

export default GoogleTagManager;
