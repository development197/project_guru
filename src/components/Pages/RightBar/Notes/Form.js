import React from "react";

// Functional Component or Stateless component
const Form = ({ onCreate, onUpdate, onInputChange, mode, item = {} }) => {
  const handleSubmit = e => {
    e.preventDefault();

    mode === "create" ? onCreate() : onUpdate();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="title">
          <input
            className="note-input"
            type="text"
            value={item.title}
            placeholder="Title"
            onChange={e => onInputChange("title", e.target.value)}
          />
        </label> */}

        <label htmlFor="note">
          <textarea
            className="note-input"
            required
            value={item.note}
            placeholder="Take a note..."
            onChange={e => onInputChange("note", e.target.value)}
          />
        </label>

        {/* <button className="note-btn-create">{mode === "create" ? "Create" : "Save"}</button> */}
      </form>
    </div>
  );
}


export default Form;