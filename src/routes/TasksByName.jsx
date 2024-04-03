import { useState } from "react";
import "./TaskByName.css";
import taskFetch from "../axios/config";
import { Link } from "react-router-dom";

const TasksByName = () => {
  const [task, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");

  const getTaskByName = async (title) => {
    try {
      const response = await taskFetch.get(`/task/?title=${title}`);
      setTask(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = taskName.trim();
    const nameIsValid = /^[a-zA-Z\s]+$/.test(name);
    if (name && nameIsValid) {
      getTaskByName(name);
    }
  };

  let content;
  if (task.length === 0) {
    content = <p className="task-not-found">tarefa não encontrada</p>;
  } else {
    content = task.map((task) => (
      <div className="task task-name" key={task.id}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <Link to={`/tasks/${task.id}`} className="btn">
          Ver mais
        </Link>
      </div>
    ));
  }

  return (
    <div className="taskByName">
      <h2>Buscar tarefa por nome:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-name"
            placeholder="Digite o nome da tarefa"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input type="submit" value="Buscar tarefa" className="btn" />
        </div>
      </form>
      <div>{content}</div>
    </div>
  );
};

export default TasksByName;
