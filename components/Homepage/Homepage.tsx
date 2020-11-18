import React from "react";
import styled from "styled-components";

import { TRANSITION_DURATION_BASE } from "constant";

export const Homepage = () => {
  return <Wrapper>Hello</Wrapper>;
};

const Wrapper = styled.div`
  background: var(--color-background);
  transition: background ${TRANSITION_DURATION_BASE}ms;
`;
