import React from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, statusToogle } from "../redux/actions/actions";



const Tasks = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();


  return tasks.map((task) => (
    <div
      className={`tasks-container ${task.status === "done" && "task--done"}`}
      key={task.id}
      data-id={task.id}
    >
      <li className="task">{task.name}</li>
      <div className="task-buttons">
        <p className="task-delete" onClick={e=>{dispatch(deleteTask(tasks, e))}}>
          <CgTrashEmpty />
        </p>
        <p className="task-done" onClick={e=>{dispatch(statusToogle(tasks, e))}}>
          <AiOutlineCheck />
        </p>
      </div>
    </div>
  ));
};

export default Tasks;
