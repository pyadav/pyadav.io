import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useInterval from "@use-it/interval";
import styled from "styled-components";
import ExclamationCircle from "./exclamation-circle.inline.svg";
import InformationCircle from "./information-circle.inline.svg";

const Container = styled.div`
  padding: var(--spacing-4);
  margin: var(--spacing-2) var(--spacing-0);
  border-left: 4px solid;
  border-radius: var(--spacing-1);
  --border-opacity: 1;
  border-color: rgba(99, 102, 241, var(--border-opacity));
  --bg-opacity: 1;
  background-color: rgba(191, 219, 254, var(--bg-opacity));
`;

const AlertHeader = styled.h2`
  margin: 0;
  margin-bottom: var(--spacing-2);
  font-weight: bold;
  --text-opacity: 1;
  color: rgba(67, 56, 202, var(--text-opacity));
`;

type IconsTypes = {
  [key: string]: any;
};

const icons: IconsTypes = {
  info: InformationCircle,
  warning: ExclamationCircle,
};

function Alert({ children, title = "", type }: any) {
  const [top, setTop] = useState(false);
  useInterval(() => setTop((t) => !t), top ? 300 : 1000);
  const props = useSpring({
    config: {
      mass: 2,
    },
    top: top ? -6 : -1,
  });

  const Icon = icons[type];

  return (
    <Container>
      <AlertHeader className="text-base">
        {Icon && (
          <animated.div style={props} className="inline relative">
            <Icon
              style={{
                height: "1rem",
                marginRight: ".25rem",
                display: "inline",
                verticalAlign: "middle",
              }}
            />
          </animated.div>
        )}
        {title}
      </AlertHeader>
      <p>{children}</p>
    </Container>
  );
}

export default Alert;
