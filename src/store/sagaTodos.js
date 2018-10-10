import { fork, takeEvery, put } from 'redux-saga/effects'

function* fetchTodos(action) {
  console.log('>>> fetchTOdos', action)
  yield put({
    type: 'FETCH_TODOS_SUCCESS',
    payload:{
      todos: [
        {
          id: '1',
          text: 'Go to lunch',
          isCompleted: false
        },
        {
          id: '2',
          text: 'Talk to Mom',
          isCompleted: false
        }
      ]
    }
  })
}

function* watchTodos() {
  yield takeEvery('FETCH_TODOS', fetchTodos)
}

export const todosSaga = [
  fork(watchTodos)
];
