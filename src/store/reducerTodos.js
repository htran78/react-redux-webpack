export default (state = [], action = {}) => {
  switch(action.type){
    case 'FETCH_TODOS_SUCCESS':
      return [
        ...state,
        ...action.payload.todos
      ]
    default:
      return state
  }
};