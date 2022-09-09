import React from "react";
import App from './App.js';
import { shallow } from enzyme;


describe('<App/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined();
    });

    it('renders App header', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-header')).toBeDefined();
    });

    it('renders App body', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-body')).toBeDefined();
    });

    it('renders App footer', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-footer')).toBeDefined();
    });
})