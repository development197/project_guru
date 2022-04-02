import React from "react";

// Functional Component or Stateless component
const Note = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        <h4 className="card__title">{title}</h4>

        {note}

        <div className="card__action">
          <button className="note-btn-create" onClick={() => onDelete(id)}>
            Delete
          </button>
          <button className="note-btn-create" onClick={() => onEdit(index)}>
            Edit
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">Add your note here</p>
  );

export default Note;
