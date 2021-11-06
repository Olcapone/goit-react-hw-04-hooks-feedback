import React from 'react';
import shortid from "shortid";
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MockedStatistics from '../src/components/Statictics/Statistics';

jest.mock("../src/components/Statictics/Statistics", () => {
    return function DummyStat(props) {
      return (
        <div>
            
            {props.options.map((option, idx) =>  (
            <li key={idx+1} data-testid="stats_options">
            {option.name}:{option.value}
            </li>))}
            
            <li key={props.total} data-testid="stat_total">
            {props.total}:{props.total}
            </li>
            <li key={props.positivePercentage} data-testid="stat_positivePercentage">
            {props.positivePercentage}:{props.positivePercentage}
            </li>
        </div>
      );
    };
  });

        let container = null;
        beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
        });

        afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        });

describe("Statistics", () => {
   const option =  [{ name: 'good', value: 0}, {name: 'bad', value: 2}, {name: 'notbad', value: 8 }] ;

   it("has props", () => {
     const wrapper = shallow(
     <MockedStatistics 
          options={ option }
          total={10}
          positivePercentage={52} 
     />);
     
     expect(wrapper.debug()).toContain("stats_options");
    // expect(wrapper.debug()).toMatchSnapshot();
   })

  it('has no props option', () => {
   const wrapper = shallow(
   <MockedStatistics 
   options={[]}
   total={9}
   positivePercentage={72}/>);
   expect(wrapper.debug).not.toContain('stats_options');
   })

   it('has no props total', () => {
    const wrapper = shallow(
    <MockedStatistics 
    options={option}
    total={0}
    positivePercentage={72}/>);
    expect(wrapper.debug).not.toContain('stat_total');
    })

    it('has no props positivePercentage', () => {
        const wrapper = shallow(
        <MockedStatistics 
        options={option}
        total={0}
        positivePercentage={72}/>);
        expect(wrapper.debug).not.toContain('stat_positivePercentage');
        })

   it("should render stats information", () => {
    
    act(() => {
      render(
        <MockedStatistics
          options={ option }
          total="20"
          positivePercentage="52"
        />,
        container
      );
    });
  
    expect(
      container.querySelector("[data-testid='stat']")).toMatchSnapshot();
  });

});