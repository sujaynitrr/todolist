import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === isEdit) {
            return {
              ...item,
              title: name,
            };
          }
          return item;
        })
      );
      setIsEdit(null);
      setName("");
      setIsEditing(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const deleteHandler = (id) => {
    const filteredItems = list.filter((item) => {
      return item.id != id;
    });
    setList(filteredItems);
  };
  const editHandler = (id) => {
    setIsEditing(true);
    console.log(id);
    const editList = list.find((item) => {
      return item.id === id;
    });
    setName(editList.title);
    setIsEdit(id);
  };

  return (
    <>
      <h2>grocery bud setup</h2>
      <form onSubmit={submitHandler}>
        <input onChange={nameChangeHandler} value={name} />
        <button>{isEditing ? "Edit" : "ADD"}</button>
      </form>
      {list.length > 0 && (
        <List
          items={list}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      )}
    </>
  );
}

export default App;
