import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Clock from "./components/Clock";
import Stoper from "./components/Stoper";
import {Col, Row, Button} from 'antd'

function App() {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <div>
        <Button
          type={'primary'}
          onClick={() => setToggle(!toggle)}
        >
          Zegar
        </Button>

        <Button
          type={'primary'}
          onClick={() => setToggle(!toggle)}
        >
          Stoper
        </Button>
      </div>

      <div>
        {toggle ? <Stoper/> : <Clock/>}
      </div>

    </div>

  );
}

export default App;
