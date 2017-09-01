'use strict';
// STEP 3 define reducers
// BOOKS REDUCERS
export function booksReducers(state = {
  books: []
}, action) {
  switch (action.type) {
  // GET BOOK METHOD
  case 'GET_BOOKS':
    return { ...state, books: [...action.payload] };
    break;

    // POST BOOK METHOD
  case 'POST_BOOK':
    return { books: [...state.books, ...action.payload] };
    break;

    // DELETE BOOK METHOD
  case "DELETE_BOOK":
  // Create a copy of the current array of books
  const currentBookToDelete = [...state.books]
    // Determine at which index in books array is the book to be deleted
  const indexToDelete = currentBookToDelete.findIndex(
    function (book) {
      return book._id == action.payload
    }
  )
  return {
    books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]
  }
  break;

  // UPDATE BOOK METHOD
  case "UPDATE_BOOK":
    // Create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    // Determine at which index in books array is the book to be Update
    const indexToUpdate = currentBookToUpdate.findIndex(
      function (book) {
        return book._id === action.payload._id;
      }
    )
    // Create a new book object with the new values and with the same array index of the item we want
    // to replace. to achieve this we will use ...spread but we could use concat methos too
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    // This Log has the purpose to show you how newBookToUpdate looks like
    console.log("what is it newBookToUpdate", newBookToUpdate);
    // Use slice to remove the book at the specified index, replace with the new object and concatenate with the rest of items in the array
    return {
      books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
      ...currentBookToUpdate.slice(indexToUpdate + 1)]
    }
    break;
  }
  return state;
}