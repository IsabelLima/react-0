import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const item = {
            "title": "Ginger Champagne",
            "href": "http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx",
            "ingredients": "champagne, ginger, ice, vodka",
            "thumbnail": "http:\/\/img.recipepuppy.com\/1.jpg"
        };
        const i = 0;
        const wrapper = mount(<RecipeItem recipe={item} key={i}/>);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
        wrapper.unmount();
    })

    // Add more tests here
})
