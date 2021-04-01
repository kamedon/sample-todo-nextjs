import {useCallback, useEffect, useState} from 'react';
import {Domain, Store, UseCase, ViewModel} from '@feature';
import {useRecoilState} from 'recoil';

export const useTodosViewModel = () => {
  const {
    showLoading,
    loading,
    hideLoading,
  } = ViewModel.Loading.useLoadingViewModel();

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useRecoilState(Store.Todo.todos);

  useEffect(() => {
    showLoading();
    UseCase.Todo.todos()
      .then(res => {
        setTodos(res);
      })
      .finally(hideLoading);
  }, []);

  const postTodo = useCallback(() => {
    const todo: Domain.Todo.Todo = {
      title,
      status: 'issue',
    };
    showLoading();
    UseCase.Todo.post(todo)
      .then(() => {
        setTodos([...todos, todo]);
        setTitle('');
      })
      .finally(hideLoading);
  }, [title, todos]);

  return {
    state: {
      loading,
      todos,
      title,
    },
    actions: {
      postTodo,
      setTitle,
    },
  };
};
