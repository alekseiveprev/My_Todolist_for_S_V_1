import { FC, useState } from 'react';
import './style.css';
import { Todolost } from './Todolost';

export type ChangeTaskType = 'All' | 'Active' | 'Completed';

export const App: FC<{ name: string }> = ({ name }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Hello world', isDone: true },
    { id: 5, title: 'I am Happy', isDone: false },
    { id: 6, title: 'Yo', isDone: false },
  ]);

  const removeTask = (id: number) => {
    const newTasks = tasks.filter((nt) => {
      return nt.id !== id;
    });
    setTasks(newTasks);
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
