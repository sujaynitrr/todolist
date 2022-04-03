import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, deleteHandler, editHandler }) => {
  return (
    <>
      <h2>list component</h2>
      {items.map((item) => {
        const { title, id } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>

            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editHandler(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteHandler(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
