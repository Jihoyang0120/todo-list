import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import Swal from "sweetalert2";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
    Swal.fire({
      icon: "success",
      title: "New Task has been create!",
      text: "Go for it!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    Swal.fire({
      icon: "success",
      title: "Your task has been updated.",
      text: "Go for it!",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <>
      <div className="header text-center">
        <h3 className="title">Todo List</h3>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            taskObj={obj}
            index={index}
            setModal={setModal}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} />
    </>
  );
};

export default TodoList;
