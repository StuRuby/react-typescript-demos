import * as React from 'react';
import TodoTextInput from './TodoTextInput';
import { Todo } from '../models';
import * as classnames from 'classnames';

interface Props {
    todo: Todo;
    editTodo: (id: number, text: string) => void;
    deleteTodo: (id: number) => void;
    completedTodo: (id: number) => void;
}

interface State {
    editing: boolean;
}

export default class TodoItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    private handleSave = (id: number, text: string) => {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.editTodo(id, text);
        }
        this.setState({ editing: false });
    };

    private handleDoubleClick = () => {
        this.setState({ editing: true });
    };

    render() {
        const { todo, editTodo, deleteTodo, completedTodo } = this.props;
        const element = this.state.editing ? (
            <TodoTextInput
                text={todo.text}
                editing={this.state.editing}
                onSave={(text: string) => this.handleSave(todo.id, text)}
            />
        ) : (
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => this.props.completedTodo(todo.id)}
                />
                <label onDoubleClick={this.handleDoubleClick}>
                    {todo.text}
                </label>
                <button
                    className="destory"
                    onClick={() => this.props.deleteTodo(todo.id)}
                />
            </div>
        );
        // Change `esModuleInterop` in `tsconfig.json` from `true` to `false`,and solve classnames error.
        return (
            <li
                className={classnames({
                    completed: todo.completed,
                    editing: this.state.editing
                })}
            >
                {element}
            </li>
        );
    }
}
