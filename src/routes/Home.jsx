import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";
import taskFetch from "../axios/config";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await taskFetch.get("/task/");

      const data = response.data;

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="home">
      <h1>Todas as tarefas</h1>
      {tasks.length === 0 ? (
        <p>tarefa não encontrada</p>
      ) : (
        tasks.map((task) => {
          return (
            <div className="task" key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <Link to={`/tasks/${task.id}`} className="btn">
                Ver mais
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
