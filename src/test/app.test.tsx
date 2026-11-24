import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders HANVI Global Tech corporate website", () => {
    render(<App />);
    const elements = screen.getAllByText(/HANVI GLOBAL TECH/i);
    expect(elements.length).toBeGreaterThan(0);
    expect(elements[0]).toBeInTheDocument();
  });
});
