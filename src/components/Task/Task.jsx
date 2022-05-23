import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [newValue,setNewValue]=setNewValue(1)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{setNewValue}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button">Delet button</button>
    </li>
  );
};

export default Task;
