import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('It should correctly render LoginPage.', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('It should call beginLogin on button click.', () => {
    const beginLogin = jest.fn();
    const wrapper = shallow(<LoginPage beginLogin={beginLogin} />)
    wrapper.find('button').simulate('click');
    expect(beginLogin).toHaveBeenCalled();
});