import './Lista.css';
import React, {useState} from "react";
import CheckboxTask from "./CheckboxTask/CheckboxTask";

function Lista() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isHide, setIsHide] = useState(false);

  const uncheckedTasksAmount = taskList.filter((task) => !task.isDone).length;

  const toggleIsDone = (id) => {
    setTaskList(prevState => {
      return prevState.map( (task) => {

        if (task.id === id) {
          return {...task, isDone: !task.isDone}
        }
        return task;
      });
    });
  }
  const dodajZadanie = () => {
    setTaskList((prevState) => [...prevState, {id: "" + Math.random(),content: newTask, isDone: false}]);
  }
  const handleText = (event) => {
    setNewTask(event.target.value);
  }

  const TaskList = taskList?.map((task) => {
    return <CheckboxTask key={task.id} task={task} toggleIsDone={toggleIsDone} isCheck={isHide}></CheckboxTask>;
  })

  return (
  <div>
    <input type="checkbox" onInput={(e) => {setIsHide(e.target.checked)}}/> ukryj zrobione
    <hr></hr>
    <div>{(uncheckedTasksAmount === 0 && isHide) || taskList.length === 0? "Brak zadań" : TaskList}</div>
    <br/>
    <hr></hr>
    <input onInput={handleText} type="text" name="text"/> <button onClick={dodajZadanie}>add</button>
  </div>
  );
}

export default Lista;
