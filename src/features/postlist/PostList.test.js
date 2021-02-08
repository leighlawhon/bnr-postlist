import React from "react";
import { getByTestId } from '@testing-library/dom'
import configureStore from 'redux-mock-store';
import PostList from "./PostList";
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer';
import thunk from 'redux-thunk'
import { screen, waitFor } from '@testing-library/react'

describe('My Connected React-Redux Component', () => {
  const middlewares = [thunk]

  const { act, create } = TestRenderer;
  const mockStore = configureStore(middlewares);

  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      postsResults: {
        posts: [],
        error: null,
        loading: false,
        userIds: []
      },
    });
    act(() => {
      component = create(
        <Provider store={store}>
          <PostList />
        </Provider>
      );
    });
  });

  it("should render with given state from Redux store", async () => {
    expect(await component.toJSON()).toMatchSnapshot();
  })

})