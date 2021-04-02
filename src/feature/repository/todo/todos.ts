import {Todo} from '../../domain/Todo';

function todos() {
  return new Promise<Todo[]>(resolve => {
    setTimeout(() => {
      const data: Todo[] = [{title: 'first', status: 'issue'}];
      return resolve(data);
    }, 1000);
  });
}
export default todos;
