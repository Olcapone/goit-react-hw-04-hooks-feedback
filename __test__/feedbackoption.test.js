import React from 'react';
import { shallow } from 'enzyme';
import FeedbackOptions from '../src/components/FeedbackOptions/FeedbackOptions';


describe("FeedbackOptions", () => {
   it("has props", () => {
     const wrapper = shallow(<FeedbackOptions options="test options" />);
     expect(wrapper.debug()).toMatchSnapshot();
   })

  it('has no props', () => {
   const wrapper = shallow(<FeedbackOptions />);
   expect(wrapper.debug()).toMatchSnapshot();
   })
  
});
