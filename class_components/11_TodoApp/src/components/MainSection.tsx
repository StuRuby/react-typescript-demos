import * as React from 'react';
import * as classnames from 'classnames';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    SHOW_TYPES
} from '../constants/TodoFilter';
import { Todo } from '../models';
import * as TodoActions from '../actions';

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
    [SHOW_COMPLETED]: (todo: Todo) => todo.completed
};

interface Props {
    todos: Todo[];
    actions: TodoActions.Actions;
}

interface State {
    filter: SHOW_TYPES;
}

export default class MainSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            filter: SHOW_ALL
        };
    }

    private renderToggleAll = (completedCount: number) => {
        const { todos, actions } = this.props;
        if (todos.length > 0) {
            return (
                <span>
                    <input
                        className="toggle-all"
                        type="checkbox"
                        defaultChecked={completedCount === todos.length}
                        // checked={completedCount === todos.length}
                    />
                    <label onClick={actions.completeAll} />
                </span>
            );
        }
    };

    private renderFooter = (completedCount: number) => {
        const { todos } = this.props;
        const { filter } = this.state;
        const activeCount = todos.length - completedCount;
        if (todos.length) {
            return (
                <Footer
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                    onClearCompleted={this.handleClearCompleted}
                    onShow={this.handleShow}
                />
            );
        }
    };

    private handleClearCompleted = () => {
        this.props.actions.clearCompleted();
    };

    private handleShow = (filter: SHOW_TYPES) => {
        this.setState({ filter });
    };

    render() {
        const { todos, actions } = this.props;
        const { filter } = this.state;

        const filteredTodos = todos.filter(TODO_FILTERS[filter]);
        const completedCount = todos.reduce(
            (count, todo) => (todo.completed ? count + 1 : count),
            0
        );
        return (
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    ))}
                </ul>
                {this.renderFooter(completedCount)}
            </section>
        );
    }
}
