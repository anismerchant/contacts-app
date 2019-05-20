import React from 'react';
import { shallow } from 'enzyme';
import { AddContact } from '../../components/AddContact';
import contacts from '../seed/contacts';

let beginAddContact, history, wrapper;

beforeEach( () => {
    beginAddContact = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddContact beginAddContact={beginAddContact} history = {history} />)
});

test('This should correctly render AddContact component.' , () => {
    expect(wrapper).toMatchSnapshot();
});