import React, { useState } from "react";
import { Row, Col, Input, Button, List, Card, Modal } from "antd";

function Time() {
  const [currenttime, updatedttime] = useState();
  const update = () => {
    let time = new Date().toLocaleTimeString();
    updatedttime(time);
  };
  setInterval(update, 1000);
  return (
    <div
      style={{
        backgroundColor: "pink",
        margin: "50px",
        padding: "10px",
      }}
    >
      <Row>
        <Col span={24}>
          <h1>TIME: {currenttime}</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Time;
