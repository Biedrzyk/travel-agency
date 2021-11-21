import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component TripSummary', () => {
  it('should generate without crashing', () => {
    const component = shallow(<OrderOption
      type='lolo'
      name='bobo' 
    />);
    expect(component).toBeTruthy();
  });
});