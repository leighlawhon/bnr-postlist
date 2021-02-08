import React from "react";
import FeaturedPosts from "./FeaturedPosts";
import { render as rtlRender } from '@testing-library/react'


jest.mock('../../components/select/Select', () => () => (<div>One</div>));
jest.mock('../../components/postItem/postItem', () => () => (<div>Two</div>));

test('renders', () => {
  const { container } = rtlRender(<FeaturedPosts />);
  expect(container.textContent)
    .toMatch('Featured Author: OneTwo');
});

