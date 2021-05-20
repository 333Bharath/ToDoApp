import React from "react";
import classes from "./ToDoItem.module.css";
import Button from "../../UI/button/Button";
//import Checkbox from "../../UI/checkbox/Checkbox";
// import { Checkbox } from "pretty-checkbox-react";

const ToDoItem = (props) => {
  return (
    <div className={classes.toDoItem}>
      <div className={classes.left}>

        {/* <Checkbox
          completed={props.completed}
          markCompleted={props.markCompleted}
        /> */}

      
        <input
          type="checkbox"
          checked={props.completed}
          onChange={props.markCompleted}
        />
      </div>
      <div className={classes.middle}>{props.children}</div>
      <div className={classes.right}>
        <Button onButtonHandler={props.onRemoveItems} btnType="Danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ToDoItem;
