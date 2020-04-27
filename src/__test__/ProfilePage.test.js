import React from "react";
import { render } from "@testing-library/react";
import ProfilePage from "../pages/ProfilePage";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("renders header", () => {
  const { getByText } = render(<ProfilePage />);
  const mText = getByText(/Profil/i);
  expect(mText).toBeInTheDocument();
});
