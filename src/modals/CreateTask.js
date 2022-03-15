import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    saveTask(taskObj);
  };

  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group mb-2">
                <label className="mb-2">Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={taskName}
                  onChange={handleChange}
                  name="taskName"
                />
              </div>
              <div className="form-group">
                <label className="mb-2">Description</label>
                <textarea
                  rows="5"
                  className="form-control"
                  value={description}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>
              Create
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default CreateTask;
