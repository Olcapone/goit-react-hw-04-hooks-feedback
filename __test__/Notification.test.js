 import React from 'react';
 import { shallow } from 'enzyme';
 import Notification from '../src/components/Notification/Notification';


 describe("Notification", () => {
   it("has props", () => {
     const wrapper = shallow(<Notification message={"test"} />);
     expect(wrapper.debug()).toContain('test');
   })

  it('has no props', () => {
   const wrapper = shallow(<Notification />);
   expect(wrapper.debug()).toMatchSnapshot();
   })
  
 });
