import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('It should correctly render Header.', () => {
    const wrapper = shallow(<Header beginLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('It should call beginLogout on button click.', () => {
    const beginLogout = jest.fn();
    const wrapper = shallow(<Header beginLogout={beginLogout} />)
    wrapper.find('button').simulate('click');
    expect(beginLogout).toHaveBeenCalled();
});