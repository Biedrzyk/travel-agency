import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.summerDays',
};

const mockProps = {
  days: 'days',
};

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should have h3 with class summerDays', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

describe('Component DaysToSummer with mocked Date', () => {
  it('should show correct at 2021-09-25', () => {
    global.Date = mockDate('2021-09-25');
 
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual('269 days to summer!');
  
    global.Date = trueDate;
  });
  global.Date = trueDate;
});
