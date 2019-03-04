import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import MainSection from './components/MainSection';
import * as TodoActions from './actions';
import { Todo } from './models';

// type Dispatch = ReduxDispatch<State>;

interface Props {
    todos: Todo[];
}

interface State {
    todos: Todo[];
}

export interface AppDispatchProps {
    actions: TodoActions.Actions;
}

type AppProps = Props & AppDispatchProps;

const App: React.StatelessComponent<AppProps> = (props: AppProps) => {
    return (
        <div>
            <Header addTodo={props.actions.addTodo} />
            <MainSection todos={props.todos} actions={props.actions} />
        </div>
    );
};

const mapState = (state: State) => ({
    todos: state.todos
});

const mapDispatch = (dispatch: Dispatch): AppDispatchProps => ({
    actions: {
        clearCompleted: () => {
            dispatch(TodoActions.clearCompleted());
        },
        completeAll: () => {
            dispatch(TodoActions.completeAll());
        },
        editTodo: (id: number, text: string) => {
            dispatch(TodoActions.editTodo(id, text));
        },
        completedTodo: (id: number) => {
            dispatch(TodoActions.completedTodo(id));
        },
        addTodo: (text: string) => {
            dispatch(TodoActions.addTodo(text));
        },
        deleteTodo: (id: number) => {
            dispatch(TodoActions.deleteTodo(id));
        }
    }
});

export default connect(
    mapState,
    mapDispatch
)(App);
