
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Statistics from '../src/components/Statictics/Statistics';
import userEvent from '@testing-library/user-event';

const props =  [{id:"1", name: "Jane"}, {id:"2", name: "Ann"}];
//jest.mock('../src/components/Statictics/Statistics', () => Promise.resolve(props));

describe("render Statistics", () => {

  it("should expose loading and posts prop", () => {
    const optionsCallbackMock = jest.fn();
  //   const { getByTestId } = render(
  //     <Statistics>{optionsCallbackMock}</Statistics>
  //   );
  //  // await screen.findByText(/No feedback given/i);
  //   expect(screen.queryByText(/Total/i)).toBeNull();
  //   expect(optionsCallbackMock).toHaveBeenCalledWith({
  //     loading: false,
  //     options: props
  //   })
    //userEvent.type(screen.getByRole('list'), 'Total');
    //fireEvent.change(screen.getByRole("list"), {target: {value: "good"}});
    //expect(screen.queryByText(/Total/i)).toBeInTheDocument();

    
    
    // const {queryByText, getByText} = render(<Statistics options={[...props]} />); 
    // const listElement = queryByText(/Total/i);
    // expect(listElement).toBeNull();
    
    
    // const { asFragment } = render(<Statistics options="test options" />); 
    // expect(asFragment(<Statistics/>)).toMatchSnapshot();
    // render(<Statistics options="no options" />);
  
  })

 it('has no props', () => {
    const {getByText} = render(<Statistics options="no options" />); 
    const listElement = getByText(/No feedback given/i);
    expect(listElement).toBeInTheDocument();

  })
  
});


