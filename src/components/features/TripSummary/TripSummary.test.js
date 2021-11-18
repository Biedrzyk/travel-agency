import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate without crashing', () => {
    const component = shallow(<TripSummary
      id='abd'
      image='imago.jpg'
      name='bobo' 
      cost='$200'
      days={7}
      tags={[]}
    />);
    expect(component).toBeTruthy();
  });
  it('should generate right address', () => {
    const expectedAdress = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('Link').prop('to')).toEqual(expectedAdress);
  });

  it('should render correct alt and image', () => {
    const expectedAlt = 'bob';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props: name, cost, days', () => {
    const expectedPropName = 'rainbow';
    const expectedPropCost = '$999';
    const expectedPropDays = 4;
    const component = shallow(<TripSummary name={expectedPropName} days={expectedPropDays} cost={expectedPropCost} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedPropName);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedPropDays} days`);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedPropCost}`);
  });

  
});