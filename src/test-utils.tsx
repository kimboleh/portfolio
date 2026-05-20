import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

/**
 * Custom render function that wraps components with React Router
 * so you can test pages or components that rely on routing.
 */
export function renderWithRouter(
  ui: React.ReactElement,
  {
    route = "/",
    routerProps = {},
    ...renderOptions
  }: { route?: string; routerProps?: Partial<MemoryRouterProps> } & RenderOptions = {}
) {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]} {...routerProps}>
      {ui}
    </MemoryRouter>,
    renderOptions
  );
}

// Re-export everything from Testing Library for convenience
export * from "@testing-library/react";
