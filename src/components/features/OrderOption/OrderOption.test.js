import React from 'react';
import { shallow } from 'enzyme';
import { OrderOption } from './OrderOption';

describe('Component OrderOption', () => {
  const expectedName = 'Lorem ipsum';
  const expectedType = 'Ipsum lorem';
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should have title from props name', () => {
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

});