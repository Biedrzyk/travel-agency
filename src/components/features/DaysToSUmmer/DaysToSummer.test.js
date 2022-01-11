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

  describe('Component DaysToSummer with mocked Date', () => {
    const customDate = '2021-08-01';
    const trueDate = Date;

    const mockDate = class extends Date {
      constructor(...args) {
        if (args.length) {
          super(...args);
        } else {
          super(customDate);
        }
        return this;
      }
      static now() {
        console.log((new Date(customDate)).getTime());
        return (new Date(customDate)).getTime();
      }
    };

    it('should show correct at 2021-08-01', () => {
      global.Date = mockDate;

      const component = shallow(<DaysToSummer {...mockProps} />);
      const renderedTime = component.find(select.title).text();
      expect(renderedTime).toEqual('324 days to summer!');

      global.Date = trueDate;
    });
  });
});