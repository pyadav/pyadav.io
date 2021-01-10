import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  max-width: 100vw;
  width: ${(props) => props.theme.contentWidth};

  @media (max-width: 768px) {
    padding: var(--spacing-6);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: var(--spacing-12) 0;
  max-width: ${(props) => props.theme.contentWidth};
  border-bottom: 1px solid var(--spacing-4);

  @media (max-width: 768px) {
    padding: var(--spacing-6);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  padding: 1rem auto 0 auto;
  margin: 1rem 0 1rem 0;
  line-height: 1em;
`;

const Updated = styled.span`
  text-transform: lowercase;
  font-size: 0.6rem;
  font-weight: normal;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: normal;
  width: 100%;
`;

export { Wrapper, Header, Title, Subtitle, Updated };
