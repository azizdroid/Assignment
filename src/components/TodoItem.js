import React, { useState } from "react";
import { Row, Col, Input, Button, List, Card, Modal } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {
  PlusOutlined,
  DeleteOutlined,
  CheckOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
function TodoItem({ text, key }) {
  const [value, setValue] = useState(false);
  const deltodo = () => {
    setValue(true);
  };

  return (
    <div>
      <div>
        <Card
          size="small"
          key={key}
          style={{
            display: "flex",
            textDecorationLine: value ? "line-through" : "none",
          }}
        >
          <span>
            {" "}
            &nbsp; <DeleteOutlined onClick={deltodo} />
          </span>
          &nbsp; {text} &nbsp;{" "}
          {value ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ""}
        </Card>
      </div>
    </div>
  );
}

export default TodoItem;
