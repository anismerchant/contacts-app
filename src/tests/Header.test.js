import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/Header';

test('It should correctly render Header.', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('It should call startLogout on button click.', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});