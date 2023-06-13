import { ChangeEvent, useState } from "react";
import "./App.css";
import { TodoTypeList } from "./TodoType";
import ShoweToDo from "./ShoweToDo";

function App() {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [list, setList] = useState<TodoTypeList[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDay(Number(e.target.value));
    }
  };

  const handleTask = () => {
    const newList = { taskName: task, wordDay: day };
    setList([...list, newList]);
    setTask("");
    setDay(0);
    console.log(list);
  };

  const deleteTask = (nameToDelete:string):void => {
    const deleteList = list.filter((x) => x.taskName !== nameToDelete )
    setList(deleteList)
  }

  return (
    <div className="App">
      <div className="a-item">
        <div className="a-item-01">
          <label>Task</label>
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleInputChange}
          />
        </div>
        <div className="a-item-01">
          <label>Kaç günde bitireceğinizi girin</label>
          <input
            type="number"
            name="day"
            value={day}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleTask}>Ekle</button>
      </div>
      <div className="b-item">
        {list.map((item: TodoTypeList, index: number) => {
          return <ShoweToDo deleteTask={deleteTask} key={index} task={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
