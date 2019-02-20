/*
let nextTodoId = 0;

export const addTodo = (text) => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
});
// Parenthesize the body of function to return an object literal expression.

export const setFilter = (filter) => ({
    type: "SET_FILTER",
    filter
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});
*/

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};






