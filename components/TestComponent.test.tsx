import { render } from "@testing-library/react";

function TestComponent() {
  return <div>Hello</div>;
}

describe("TestComponent", () => {
  it("renders Hello", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
