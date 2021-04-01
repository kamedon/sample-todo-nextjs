import {Domain, Repository} from '@feature';

export default function post(todo: Domain.Todo.Todo) {
  return Repository.Todo.post(todo);
}
