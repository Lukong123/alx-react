import React from "react";
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from "aphrodite";
import 'aphrodite';
import { AppContext, user, logOut } from "./AppContext";
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { uiReducer } from '../reducers/uiReducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

fetchMock.mock('*', 200);
const mockStore = configureStore([thunk]);

describe('Test App.js', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><App/></Provider>);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe('Testing mapStateToProps', () => {
  it('test that verify that the function returns the right object', () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };
    expect(mapStateToProps(state)).toEqual(expect.objectContaining({ isLoggedIn: true }));
  });
});

describe("Testing rootReducer", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});