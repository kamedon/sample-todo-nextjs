export type Todo = {
    title: string
    status: TodoState
}
export type TodoState = 'issue' | 'wip' | 'done'


