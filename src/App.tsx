import { FC } from 'react';
import './style.css';
import { Todolost } from './Todolost';

export const App: FC<{ name: string }> = ({ name }) => {

  ​const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]

const removeTask=(id:number)=>{
const newTasks= tasks1.filter((nt)=>{return(nt.id!==id)})
console.log(newTasks)

}
/* const tasks2 = [
    { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false }
] */





  return (
    <div className="App">
      <Todolost title={'What to learn'} tasks={tasks1 } removeTask />

     {/*  <Todolost title={'Songs'} tasks={tasks2}/> */}
      {/* <Todolost title={'Books'} tasks/> */}
    </div>
  );
};
