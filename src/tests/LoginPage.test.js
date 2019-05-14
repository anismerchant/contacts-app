import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../components/LoginPage';

test('It should correctly render LoginPage.', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});