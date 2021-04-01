import React, {FC} from 'react';
import {useTodosViewModel} from './viewmodel';

const TodosPage: FC = () => {
  const {state, actions} = useTodosViewModel();
  return (
    <>
      <div>
        <input
          value={state.title}
          onChange={event => {
            actions.setTitle(event.target.value);
          }}
        />
        <button onClick={actions.postTodo}>登録</button>
      </div>

      <div>
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
        </ul>
      </div>
      {state.loading && <div>loading...</div>}
    </>
  );
};

export default TodosPage;
