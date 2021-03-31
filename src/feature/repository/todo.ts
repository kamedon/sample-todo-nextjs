import {Domain} from "@feature";

export const todos = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            return resolve([])
        }, 1000)
    })
}

export const postTodo = async (todo: Domain.Todo.Todo) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            return resolve(todo)
        }, 1000)
    })
}
