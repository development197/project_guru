import React from "react";
import { useState } from "react";
import Axios from "axios";

const Remainder = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("click");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //------------------------------Get request for self task data---------------------

  const [addText, setAddText] = useState("");
  const [addDate, setAddDate] = useState("");
  const addReminder = () => {
    console.log("click");
    Axios.post(`http://localhost:3001/add/task/reminder`, {
      addText: addText,
      addDate: addDate,
    }).then((response) => {
      window.alert("Reminder added");
      window.location.reload();
    });
  };

  const [editId, setEditId] = useState("");
  const updateReminder = (reminder_id) => {
    Axios.post(
      `http://localhost:3001/update/task/reminder/${reminder_id}`
    ).then((response) => {
      console.log(response.data);
      setEditId(response.data[0].reminder_id);
      setAddText(response.data[0].text);
      setAddDate(response.data[0].date_time);
    });
  };

  const update = (reminder_id) => {
    toggleModal();
    updateReminder(reminder_id);
  };

  const deleteReminder = (reminder_id) => {
    window.alert("Are you sure you want to delete this reminder?");
    Axios.delete(
      `http://localhost:3001/delete/task/reminder/${reminder_id}`
    ).then((response) => {
      console.log("success");
      window.location.reload();
    });
  };

  const editReminder = (editId) => {
    Axios.put(`http://localhost:3001/edit/task/reminder/${editId}`, {
      addText: addText,
      addDate: addDate,
    }).then((response) => {
      window.alert("Reminder updated successfully");
      window.location.reload();
    });
  };

  return (
    <div className="inner-container">
      <div className="add-remainder-btn">
        <button onClick={toggleModal} className="remainder-btn">
          <span>
            <i className="bi bi-plus"></i>
          </span>
          Add New Remainder
        </button>
        {modal && (
          <div className="remainder-mod">
            <div className="remainder-mod__heading">
              <div className="text">
                <p>Add Remainder</p>
              </div>
              <div className="remainder-mod__close-btn">
                <button className="modal-close" onClick={toggleModal}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
            </div>
            <div className="inner-container">
              <div className="remainder-form">
                <form onSubmit={handleSubmit}>
                  <div className="remainder-inp">
                    <label>Text</label>
                    <textarea
                      className="remainder-i"
                      name="text"
                      cols="30"
                      rows="10"
                      defaultValue={addText}
                      placeholder="Write your reminder here "
                      onChange={(e) => setAddText(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="remainder-inp">
                    <label>Date & Time</label>
                    <input
                      className="remainder-i"
                      name="date"
                      type="datetime-local"
                      defaultValue={addDate}
                      placeholder="Date & Time"
                      onChange={(e) => setAddDate(e.target.value)}
                    />
                  </div>
                  <div className="remainder-mod-btn">
                    {editId === "" ? (
                      <button className="remainder-b" onClick={addReminder}>
                        Save
                      </button>
                    ) : (
                      <button
                        className="remainder-b"
                        onClick={() => editReminder(editId)}
                      >
                        Update
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="remainder__tabel">
        <table>
          <thead>
            <tr>
              <th className="st-bg">S. No.</th>
              <th className="st-bg">Text</th>
              <th className="st-bg">Date & Time</th>
              <th className="st-bg">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.reminder.map((val, key) => {
              return (
                <tr>
                  <td>{val.serial_number}</td>
                  <td>{val.text}</td>
                  <td>{val.date_time}</td>
                  <td>
                    <ul>
                      <li className="edit-icon">
                        <i
                          className="bi bi-pencil-square"
                          onClick={() => {
                            update(val.reminder_id);
                          }}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </li>
                      <li className="delete-icon">
                        <i
                          class="bi bi-trash"
                          onClick={() => deleteReminder(val.reminder_id)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Remainder;
