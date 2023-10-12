import { FC, useState } from 'react';
import { v1 } from 'uuid';
import './style.css';
import { Todolost } from './Todolost';

export type ChangeTaskType = 'All' | 'Active' | 'Completed';

export const App: FC<{ }> = ({ }) => {
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Hello world', isDone: true },
    { id: v1(), title: 'I am Happy', isDone: false },
    { id: v1(), title: 'Yo', isDone: false },
  ]);

  const removeTask = (id: string) => {
    const newFilterTasks = tasks.filter((nt) => {
      return nt.id !== id;
    });
    setTasks(newFilterTasks);
  };

  const [filter, setFilter] = useState('All');
  let filteredTasks = tasks;

  if (filter === 'Active') {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === 'Completed') {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  const changeTask = (value: ChangeTaskType) => {
    setFilter(value);
  };

  return (
    <div className="App">
      <Todolost
        title={'What to learn'}
        tasks={filteredTasks}
        removeTask={removeTask}
        changeTask={changeTask}
      />

      {/*  <Todolost title={'Songs'} tasks={tasks2}/> */}
      {/* <Todolost title={'Books'} tasks/> */}
    </div>
  );
};
