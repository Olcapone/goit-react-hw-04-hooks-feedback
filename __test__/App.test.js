import React from 'react';
//import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';



 describe("App", () => {
    it('renders App component', () => {
    render(<App />);

    expect(screen.getByText(/Please leave feedback/)).toBeInTheDocument();
    expect(screen.getByText('Statistics')).toBeInTheDocument();
  });

//  it('click on button good', async () => {
//    render(<App />);
//    userEvent.type(await screen.findByText('good'));
//  });

//  it('click on button bad', async () => {
//    render(<App />);
//    userEvent.type(await screen.findByText('bad'));
//  });

//  it('click on button neutral', async () => {
//    render(<App />);
//    userEvent.type(await screen.findByText('neutral'));
//  });
 })
