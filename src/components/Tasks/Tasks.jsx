import React from "react";
import styles from "./tasks.module.css";
import Counter from "../Counter/Counter";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Counter/>

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        Add Task here
      </div>
    </>
  );
};

export default Tasks;
