import React from "react";
import { render } from "@testing-library/react";
import RideOverviewPage from "../pages/RideOverviewPage";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("renders header", () => {
  const { getByText } = render(<RideOverviewPage />);
  const mText = getByText(/Ta en tur/i);
  expect(mText).toBeInTheDocument();
});
