import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const enterkey = () => {
    if (window.event.keyCode === 13) {
    }
  };

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

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
            <Button
              color="primary"
              onClick={handleUpdate}
              onkeypress={enterkey}
            >
              Update
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default EditTask;
