import React from "react";
import Alert from "components/Alert";

function InteractiveExample({ children }: any) {
  return (
    <Alert type="info" title="Interactive Example">
      {children}
    </Alert>
  );
}

export default InteractiveExample;
