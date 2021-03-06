export type ADD_TODO = 'ADD_TODO';
export const ADD_TODO: ADD_TODO = 'ADD_TODO';

export type DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO: DELETE_TODO = 'DELETE_TODO';

export type EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO: EDIT_TODO = 'EDIT_TODO';

export type COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_TODO: COMPLETE_TODO = 'COMPLETE_TODO';

export type COMPLETE_ALL_TODO = 'COMPLETE_ALL_TODO';
export const COMPLETE_ALL_TODO: COMPLETE_ALL_TODO = 'COMPLETE_ALL_TODO';

export type CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const CLEAR_COMPLETED: CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export type ACTION_TYPES =
    | ADD_TODO
    | DELETE_TODO
    | EDIT_TODO
    | COMPLETE_TODO
    | COMPLETE_ALL_TODO
    | CLEAR_COMPLETED;
