import { ChangeTaskType } from './App';

export type TodolostPropsType = {
  title: string;
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: number) => void;
  changeTask: (value: ChangeTaskType) => void;
};

type TaskPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};
export function Todolost(props: TodolostPropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>{' '}
              <button
                onClick={() => {
                  props.removeTask(t.id);
                }}
              >
                ✖️
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.changeTask('All')}>All</button>
        <button onClick={() => props.changeTask('Active')}>Active</button>
        <button onClick={() => props.changeTask('Completed')}>Completed</button>
      </div>
    </div>
  );
}
