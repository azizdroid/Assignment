import React, { useState } from "react";
import { Row, Col, Input, Button, List, Card } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import TodoItem from "./TodoItem";
import Time from "./Time";

function Todo() {
  const [value, setValue] = useState("");
  const [item, setitem] = useState([]);

  const addtodo = () => {
    if (value === "") {
      alert("enter a value");
    } else {
      setitem((initialarray) => {
        return [...initialarray, value];
      });
      setValue("");
    }
  };

  return (
    <div>
      <Row justify="center">
        <Col>
          <Time /> <h1>TODO LIST</h1>
          <Input
            size="middle"
            placeholder="Add your Tasks here"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></Input>
          <Button
            onClick={addtodo}
            type="primary"
            style={{ marginTop: "25px", marginBottom: "20px" }}
          >
            ADD TODO
          </Button>
          <div>
            {" "}
            {item.map((val, index) => {
              return <TodoItem text={val} index={index} />;
            })}
          </div>
        </Col>
      </Row>{" "}
    </div>
  );
}

export default Todo;
