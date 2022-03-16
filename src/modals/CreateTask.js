import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Swal from "sweetalert2";

const CreateTask = ({ modal, toggle, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    const errors = [];
    let taskObj = {};
    if (!taskName) {
      errors.push("task");
    } else {
      taskObj["Name"] = taskName;
    }
    if (!description) {
      errors.push(" description");
    } else {
      taskObj["Description"] = description;
    }
    if (taskObj["Name"] && taskObj["Description"]) {
      saveTask(taskObj);
    } else {
      Swal.fire({
        title: `Nothing To-do!`,
        text: `Please fill in your ${errors}!`,
        icon: "warning",
      });
    }
  };

  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle} centered="true">
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group mb-2">
                <label className="task-name">Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={taskName}
                  onChange={handleChange}
                  name="taskName"
                  maxlength="13"
                  required
                />
              </div>
              <div className="form-group">
                <label className="description">Description</label>
                <textarea
                  rows="5"
                  className="form-control"
                  value={description}
                  onChange={handleChange}
                  name="description"
                  maxlength="85"
                  required
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>
              Create
            </Button>
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default CreateTask;
