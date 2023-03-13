import React from "react";
import { shallow, mount } from 'enzyme';
import {StyleSheetTestUtils} from 'aphrodite';
import Footer from './Footer';
import { AppContext } from "../App/AppContext";
import configureStore from 'redux-mock-store';
import { initialState } from '../reducers/uiReducer';

const mockStore = configureStore([]);
describe('Footer Component', () => {

    let wrapper;
	let store;
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
			  <Footer />
			</Provider>
		  );
	});

    it("Renders without crashing", ()=> {
        expect(wrapper).exists();
    });

    it("Renders text Copyright", ()=> {
        expect(wrapper.find('Copyright')).at(0).toBeDefined();
    });
});

describe('Testing Footer Component context and state', () => {
	let store;
	  beforeEach(() => {
		  StyleSheetTestUtils.suppressStyleInjection();
	  });
  
	  afterEach(() => {
		  jest.clearAllMocks();
	  });
  
	  it('Tests that there is no link rendered when user is logged out', () => {
		  store = mockStore(initialState);
	  const wrapper = mount(
		<Provider store={store}>
		  <Footer />
		</Provider>
	  );
  
		  expect(wrapper.find('a').length).toBe(0);
		  expect(wrapper.find('a').exists()).toBe(false);
		  expect(wrapper.text()).not.toContain('Contact us');
  
		  wrapper.unmount();
	  })
  
	  it('Tests that there is a link rendered when user is logged in within context', () => {
		  store = mockStore(initialState.merge({user: {email: 't@t.t', password: 'tt'}}));
	  const wrapper = mount(
		<Provider store={store}>
		  <Footer />
		</Provider>
	  );
  
		  expect(wrapper.find('a').length).toBe(1);
		  expect(wrapper.find('a').exists()).toBe(true);
		  expect(wrapper.text()).toContain('Contact us');
  
		  wrapper.unmount();
	  })
  });