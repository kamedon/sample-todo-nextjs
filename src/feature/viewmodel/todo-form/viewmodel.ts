import {useCallback, useState} from 'react';

export const useTodoFormViewModel = () => {
  const [title, setTitle] = useState('');

  const validate = useCallback(() => {
    if (title.length === 0) {
      return {valid: false, message: 'タイトルを入力してください'};
    }
    return {valid: true, message: ''};
  }, [title]);

  return {
    state: {
      title,
    },
    actions: {
      setTitle,
      validate,
    },
  };
};
