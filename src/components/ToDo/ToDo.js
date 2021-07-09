import React, { useState, useCallback, useContext } from "react";
import classes from "./ToDo.module.css";
import Button from "../../UI/button/Button";
import ToDoList from "../ToDoList/ToDoList";
import Modal from "../../UI/Modal/Modal";

let notification;

const ToDo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [toDoData, setToDoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const buttonHandler = () => {
    if (inputValue.length !== 0) {
      const updatedItems = [];
      updatedItems.push({
        id: inputValue,
        value: inputValue,
        isCompleted: false,
      });
      setToDoData((prevItems) => [...prevItems, ...updatedItems]);
      setInputValue("");
    }
  };

  const removeItemHandler = (id) => {
    const updatedData = toDoData.filter((item) => item.id !== id);
    setToDoData(updatedData);
  };

  const markCompleteHandler = useCallback(
    (id, index) => {
      const currentData = toDoData.filter((item) => item.id === id);
      if (currentData[0].isCompleted === false) {
        console.log("clicked", id);
        const mainData = toDoData.slice();
        const updatedData = { ...currentData[0], isCompleted: true };
        mainData[index] = { ...updatedData };
        setToDoData(mainData);
      } else {
        openModal();
        Notification.requestPermission();
      }
    },
    [setToDoData, toDoData]
  );

  const openModal = () => {
    setShowModal(true);
    var options = {
      body: "you have already completed this task",
      icon: "./assets/todo.jpg",
      dir: "ltr",
    };

    notification = new Notification("TODO Notification!", options);
  };

  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`);
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Notification with ServiceWorker");
      });
    }
  });

  const closeModal = () => {
    setShowModal(false);
    notification.close();
  };

  return (
    <React.Fragment>
      {showModal ? (
        <Modal show={showModal} closeModal={closeModal}>
          You have already completed this to-do!
        </Modal>
      ) : null}
      <div className={classes.todo}>
        <h1>TODO APP</h1>
        <input
          value={inputValue}
          placeholder={"Please enter your to-do"}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <div style={{ margin: "auto", width: "10%" }}>
          <Button onButtonHandler={buttonHandler} btnType="Success">
            ADD
          </Button>
        </div>
        <ToDoList
          toDoItems={toDoData}
          onRemoveItems={removeItemHandler}
          markComplete={markCompleteHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default ToDo;
