import React, { useState } from "react";
import Form from "./Form";

const dataa = [
  {
    id: Date.now(),
    key: "",
    val: ""
  }
];

export default function BasicTable() {
  const [data, setData] = useState(dataa);

  const handleChange = (event, id) => {
    let list = data.map((item) => {
      if (item.id === id) {
        item[event.target.name] = event.target.value;
      }
      return item;
    });
    let lastitem = list[list.length - 1];
    console.log(lastitem, "lastitem");
    if (lastitem.key.length === 1 || lastitem.val.length === 1) {
      list.push({
        id: Date.now(),
        key: "",
        val: ""
      });
    }
    setData(list);
  };

  console.log(data, "data");

  return <Form data={data} handleChange={handleChange} />;
}
