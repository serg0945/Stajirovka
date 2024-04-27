import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

test("renders learn react link", () => {
  render(<App />);
  const text = screen.getByText(/Learn React/i);
  const elementHTML = screen.getByRole("button");
  const placeholderHTML = screen.getByPlaceholderText("Какой-то инпут");
  expect(text).toBeInTheDocument();
  expect(elementHTML).toBeInTheDocument();
  expect(placeholderHTML).toBeInTheDocument();
});

test("click events", () => {
  render(<App />);
  // const btn = screen.getByTestId("btn-fireEvent");
  expect(screen.queryByTestId("btn-fireEvent")).toBeInTheDocument();
  fireEvent.click(btn);
});
