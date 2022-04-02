import React from "react";
import { useState } from "react";
import TaskContent from "./TaskContent";
import SideMenu from "../SideMenu/SideMenu";
import SelfTask from "./TaskContent/SelfTask";
import OtherTask from "./TaskContent/OtherTask";
import Remainder from "./TaskContent/Remainder";
import ApprovalDisapproval from "./TaskContent/ApprovalDisapproval";
import Axios from "axios";

const Task = () => {
  const [active, setActive] = useState("SelfTask");
  const [inactive, setInactive] = useState(false);

  const [reminderList, setReminderList] = useState([]);
  const getTaskReminder = () => {
    Axios.get(`http://localhost:3001/task/reminder`).then((response) => {
      setReminderList(response.data);
    });
  };

  const [otherTaskList, setOtherTaskList] = useState([]);
  const getOtherTask = () => {
    Axios.get(`http://localhost:3001/task/other`).then((response) => {
      setOtherTaskList(response.data);
    });
  };

  const onLoad = () => {
    getTaskReminder();
    getOtherTask();
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={onLoad}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="task">
        <div className="task__bar">
          <div className="task__menu">
            <button className="task__btn" onClick={() => setActive("SelfTask")}>
              Self Task
            </button>
            <button
              className="task__btn"
              onClick={() => setActive("OtherTask")}
            >
              Other Task
            </button>
            <button
              className="task__btn"
              onClick={() => setActive("Remainder")}
            >
              Reminder
            </button>
            <button
              className="task__btn"
              onClick={() => setActive("ApprovalDisapproval")}
            >
              Approval/Disapproval
            </button>
          </div>
        </div>
        <div className="task__main-content">
          {active === "SelfTask" && <SelfTask />}
          {active === "OtherTask" && <OtherTask otherTask={otherTaskList} />}
          {active === "Remainder" && <Remainder reminder={reminderList} />}
          {active === "ApprovalDisapproval" && <ApprovalDisapproval />}
        </div>
      </div>
    </div>
  );
};

export default Task;
