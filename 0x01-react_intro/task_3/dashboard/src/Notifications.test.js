import React from "react";
import Notifications from './Notifications.js';
import { shallow } from enzyme;


describe('<Notifications/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper).toBeDefined();
    });

    it('renders three list item', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('li')).to.have.lengthOf(3);
    });

    it('render correct text', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('p'.text())).toBe('Here is the list of notifications');
    });
})