import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import store from './storre/store'; 
import App from './App';


test('Advertisement Board', () => {
  render(
    <Provider store={store}> 
      <App />
    </Provider>
  );
  const linkElement = screen.getByText('Advertisement Board');
  expect(linkElement).toBeInTheDocument();
});
