import {useCallback, useEffect, useState} from "react";
import {useTodoUseCase} from "./usecase";
import {Domain, Store, ViewModel} from "@feature";
import {useRecoilState} from "recoil";

export const useTodoViewModel = () => {
    const useCase = useTodoUseCase()
    const {showLoading, loading, hideLoading} = ViewModel.Common.useLoadingViewModel()

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useRecoilState(Store.Todo.todos)

    useEffect(() => {
        showLoading()
        useCase.todos().then((res) => {
            setTodos(res)
        }).finally(hideLoading)
    }, [])

    const postTodo = useCallback(() => {
        const todo: Domain.Todo.Todo = {
            title, status: "issue"
        }
        showLoading()
        useCase.postTodo(todo).then(() => {
            setTodos([...todos, todo])
            setTitle('')
        }).finally(hideLoading)

    }, [title, todos])

    return {
        state: {
            loading,
            todos,
            title
        }, actions: {
            postTodo,
            setTitle
        }
    }

}
