import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Col, Row, Button, Space} from 'antd'


const formatTime = (val) => {
  if (val.toString().length != 2) {
    return `0${val}`
  }
  return val
}

const Stoper = () => {
  const [markTimeList, setMarkTimeList] = useState([])
  const [isRunning, setIsRunning] = useState(false)

  const initialState = {
    currentSec: 0,
    currentMin: 0,
    currentHour: 0,
  }

  const [currentState, setCurrentState] = useState(initialState)

  const handleStateChange = (key, value) => setCurrentState(prev => ({...prev, [key]: value}))

  function timer(currentState) {

    let currentSec = currentState.currentSec
    let currentMin = currentState.currentMin
    let currentHour = currentState.currentHour

    if (true) {

      currentSec += 1;  // add incretement
      if (currentSec == 60) {
        currentSec = 0;
        currentMin += 1;
      }
      if (currentMin == 60) {
        currentMin = 0;
        currentHour += 1;
      }
      return {currentSec, currentMin, currentHour}
      // setCurrentState({currentSec, currentMin, currentHour})
      // setTimeout(timer, 100)
    }
  }

  const onSaveHandler = () => {
    setMarkTimeList([...markTimeList, currentState])
  }

  const {
    currentSec,
    currentMin,
    currentHour
  } = currentState

  return (
    <div>
      <Row>
        <>
          <Button
            onClick={() => {
              if (!isRunning) {
                setInterval(() => setCurrentState(prev => timer(prev)), 1000)
                setIsRunning(true)
              } else {
                setIsRunning(false)
              }
            }}
          >
            {isRunning ? 'Stop' : 'Start'}
          </Button>

          <Button
            onClick={() => setCurrentState(initialState)}
          >
            Reset
          </Button>
          <Button
            onClick={() => onSaveHandler(!isRunning)}
          >
            Zapisz wynik
          </Button>


        </>
      </Row>
      <div
        style={{
          display: "flex"
        }}
      >
        <div>
          {formatTime(currentHour)}
        </div>
        <div>
          :
        </div>
        <div>
          {formatTime(currentMin)}
        </div>
        <div>
          :
        </div>
        <div>
          {formatTime(currentSec)}
        </div>
      </div>

      <div>
        {markTimeList.map(l => (
          <>
            <div>
              {formatTime(l.currentHour)}
            </div>
            <div>
              :
            </div>
            <div>
              {formatTime(l.currentMin)}
            </div>
            <div>
              :
            </div>
            <div>
              {formatTime(l.currentSec)}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Stoper;