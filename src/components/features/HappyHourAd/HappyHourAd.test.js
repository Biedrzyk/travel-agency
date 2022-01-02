import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const mockProps = {
  title: 'Test title',
  promoDescription: 'Lorem lorem lorem lorem',
};

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should have title from props title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});

describe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';

  const mockDate = class extends Date {
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };
  global.Date = mockDate;
});