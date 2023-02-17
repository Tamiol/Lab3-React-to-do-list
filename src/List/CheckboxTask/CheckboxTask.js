import './CheckboxTask.css';
import React, {useState} from "react";

function CheckboxTask({task, toggleIsDone ,isCheck}) {

    const handleIsDone = () => {
        toggleIsDone(task.id);
    }

    return (
        <div className={`${task.isDone && isCheck? "hideTask":""}`}>
            <input checked={task.isDone} type="checkbox" onChange={handleIsDone}/><span className={`${task.isDone?"done": ""}`}>{task.content}</span>
        </div>
    );
}
export default CheckboxTask;
