import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('Should be NavBar', () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper.is('Navbar')).toBeTruthy();
        wrapper.unmount();
    })

    // Add more tests here

    const mockFunction = jest.fn();

    test('Should call a function on change of input', () => {
        const wrapper = mount(<Navbar functionOnchange={mockFunction}/>);
        wrapper.find('input').simulate('change');
        expect(mockFunction).toHaveBeenCalled();
        wrapper.unmount();
    })

    
    
})
