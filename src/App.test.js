import React from "react";
import App from "./App";
import { render as rtlRender } from '@testing-library/react'


jest.mock('./features/postlist/PostList', () => () => (<div>Hello World</div>));

test('renders', () => {
  const { container } = rtlRender(<App />);
  expect(container.textContent)
    .toMatch('Hello World');
});

