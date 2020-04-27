import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("renders header", () => {
  const { getByText } = render(<HomePage />);
  const mText = getByText(/Taxideling/i);
  expect(mText).toBeInTheDocument();
});
