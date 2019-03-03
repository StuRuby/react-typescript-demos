import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_ALL_TODO,
    COMPLETE_TODO,
    CLEAR_COMPLETED,
    ACTION_TYPES
} from '../constants/actionTypes';

export interface Action {
    type: ACTION_TYPES;
    text?: string;
    id?: number;
}

export interface Actions {
    clearCompleted: () => void;
    completeAll: () => void;
    editTodo: (id: number, text: string) => void;
    completedTodo: (id: number) => void;
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
}

export const addTodo = (text: string): Action => ({
    type: ADD_TODO,
    text
});

export const deleteTodo = (id: number): Action => ({
    type: DELETE_TODO,
    id
});

export const editTodo = (id: number, text: string): Action => ({
    type: EDIT_TODO,
    id,
    text
});

export const completeTodo = (id: number): Action => ({
    type: COMPLETE_ALL_TODO,
    id
});

export const clearCompleted = (): Action => ({
    type: CLEAR_COMPLETED
});
