import React, {FC} from 'react'
import {useTodoPresenter} from "../../feature/presenter/todo";

const TodoPage: FC = () => {
    const {state, actions} = useTodoPresenter()
    return <>
        {state.loading && <div>loading...</div>}
        <div>
            <input value={state.title} onChange={event => {
                actions.setTitle(event.target.value)
            }}/>
            <button onClick={actions.postTodo}>登録</button>
        </div>

        <div>
            <ul>
                {state.todos.map((todo, index) => <li key={index}>{todo.title}</li>)}
            </ul>
        </div>

    </>
}

export default TodoPage
