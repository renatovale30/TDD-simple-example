import React from 'react';
import Counter from './Counter'
import { setupWorker } from 'msw';
import { getCount } from './mocks'

function App() {
  
  const browser = setupWorker(getCount);
  browser.start();

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
