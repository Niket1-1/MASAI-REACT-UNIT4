import React, { useState } from "react";

const Todos = () => {
  const [value, setValue] = useState("");
  const [todoslist, setTododlist] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const add = () => {
    setTododlist([...todoslist, value]);
  };
  return (
    <>
      <div style={{ backgroundColor: "gray", height: "100vh", width: "100%" }}>
        <input onChange={handleChange} type="text" placeholder="Add todo" />
        <button onClick={add}>Add</button>

        {todoslist.map((e) => (
          <div
            style={{
              border: "none",
              height: "20px",
              width: "200px",
              marginLeft: "280px",
              marginTop: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
