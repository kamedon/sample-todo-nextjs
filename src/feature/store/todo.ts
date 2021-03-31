import {atom} from 'recoil';
import {Todo} from '../domain/Todo';

export const todos = atom<Todo[]>({
  key: 'atom/Todos',
  default: [],
});
