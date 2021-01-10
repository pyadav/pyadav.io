import React from "react";
import { createGlobalStyle } from "styled-components";

import Reset from "styles/Reset";
import Prism from "styles/Prism";
import Variables from "styles/Variables";
import Custom from "styles/Custom";

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Variables}
  ${Prism}
  ${Custom}
`;

const Wrapper = (props: any) => {
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px",
    );
  }, []);
  return <GlobalStyles {...props} />;
};

export default React.memo(Wrapper);
