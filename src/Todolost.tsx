export type TodolostPropsType = {
  title: string;
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: number) => void;
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
                  alert(t.id);
                }}
              >
                ✖️
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
