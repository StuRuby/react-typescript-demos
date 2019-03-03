import { Action } from '../actions';
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_ALL_TODO,
    COMPLETE_TODO,
    CLEAR_COMPLETED,
    ACTION_TYPES
} from '../constants/ActionTypes';

interface State {
    id: number;
    text: string | undefined;
    completed: boolean;
}

const initialState = [
    {
        id: 0,
        text: 'Use Redux with Typescript',
        completed: false
    }
];

const todos = (state: State[] = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id:
                        state.reduce(
                            (maxId, todo) => Math.max(todo.id, maxId),
                            -1
                        ) + 1,
                    completed: false,
                    text: action.text
                }
            ];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id
                    ? {
                          ...todo,
                          text: action.text
                      }
                    : todo
            );
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id
                    ? {
                          ...todo,
                          completed: !todo.completed
                      }
                    : todo
            );
        case COMPLETE_ALL_TODO:
            return state.map(todo => ({
                ...todo,
                completed: !state.every(item => item.completed)
            }));
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed !== true);
        default:
            return state;
    }
};

export default todos;
