import React, {useState, useEffect} from 'react';
import {Col, Row} from 'antd'

const Clock = () => {
  let time = new Date();

  const [state, setState] = useState({
    sec: time.getSeconds(),
    min: time.getMinutes(),
    hour: time.getHours(),
    am_pm: "AM"
  })


  setInterval(showTime, 1000);

  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    setState({sec, min, hour, am_pm})
  }

  const {sec, min, hour, am_pm} = state

  useEffect(() => {
    setInterval(showTime, 1000)
  },[])

  return (
    <div>
      <Row>
        <Col>
          {hour}
        </Col>
        <div>
          :
        </div>
        <Col>
          {min}
        </Col>
        <div>
          :
        </div>
        <Col>
          {sec}
        </Col>
      </Row>
    </div>
  );
};

export default Clock;