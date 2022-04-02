import React, { useState } from "react";
import initialState from './item';

import Note from "./Note";
import Form from "./Form";

const NotesApp = () =>{
  const [mode, setMode] = useState("create");
  const [items, setItems] = useState(initialState);
  const [formItem, setFormItem] = useState({ title: "", note: "" });

  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };

  const handleCreate = () => {
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title,
      note
    };

    setItems([...items, newItems]);
    setFormItem({ title: "", note: "" });
  };

  const handleEdit = index => {
    setMode("edit");
    setFormItem(items[index]);
  };

  const handleUpdate = () => {
    const index = items.findIndex(item => item.id === formItem.id);
    const updatedItems = [...items];
    updatedItems[index] = formItem;

    setMode("create");
    setItems(updatedItems);
    setFormItem({ title: "", note: "" });
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  return (
    <div className="Notes-app">

          <div className="notes-input">
                <textarea  cols="50" rows="40" placeholder="Enter or paste your content here"></textarea>
          </div>
      {/* <Form
        mode={mode}
        item={formItem}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onInputChange={handleInputChange}
      />

      <br />

      <Note items={items} onEdit={handleEdit} onDelete={handleDelete} /> */}
    </div>
  );
}

export default NotesApp;