import React from "react";
import { TodoTypeList } from "./TodoType";

type PropsType={
    task: TodoTypeList
    deleteTask(nameToDelete:string):void
}


const ShoweToDo = ({ task,deleteTask }:PropsType) => {
  return (
    <div className="a-item">
        <h5>Task</h5>
        <p>{task.taskName}</p>

        <h5>Kalan gün</h5>
        <p>{task.wordDay}</p>
        <div>
          <button onClick={() => deleteTask(task.taskName)}>Sil</button>
        </div>
      </div>
  );
};

export default ShoweToDo;
