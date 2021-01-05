import React from "react";
import styled from "styled-components";

interface HeaderProps {
  height?: string;
  backgroundColor?: string;
}
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-areas: ". header .";
  height: ${(props: HeaderProps) => props.height || "auto"};
  background-color: ${(props: HeaderProps) => props.backgroundColor};
`;

const HeaderWrapper = (props: any) => <Wrapper {...props} height="400px" backgroundColor="#FBFBFB" />;
export const Container = styled.div`
  display: flex;
  grid-area: header;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <h1>Praveen yadav's Blog</h1>
      <p>
        Written by Praveen Yadav frontend developer interested in React, Open Source, and writin good plain HTML and
        CSS. You can follow him on Twitter.
      </p>
    </Container>
  </HeaderWrapper>
);

export default Header;
