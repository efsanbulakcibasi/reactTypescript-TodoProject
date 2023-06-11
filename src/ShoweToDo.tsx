import React from "react";
import { TodoTypeList } from "./TodoType";

type PropsType={
    task: TodoTypeList
}

const ShoweToDo = ({ task }:PropsType) => {
  return (
    <div className="a-item">
 
        <h5>Task</h5>
        <p>{task.taskName}</p>

        <h5>Kalan gün</h5>
        <p>{task.wordDay}</p>
      </div>
  );
};

export default ShoweToDo;
