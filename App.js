import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info></Info>}
    </div>
  );
}

export default App;
