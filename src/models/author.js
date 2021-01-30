import { createSelector } from 'reselect'

/**
 * Constants
 * */

export const moduleName = 'authors'
export const INITIALIZE_AUTHOR = `@@${moduleName}INITIALIZE_AUTHOR`

/**
 * Reducer
 * */

export const ReducerRecord = {
  author: {
    authorId: '',
    authorName: '',
    authorInfo: '',
    authorImg: '',
    authorContact: {
      facebook: '',
      email: '',
      whatsapp: '',
    },
  },
  isLoader: false,
  errorMessage: '',
}

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action

  switch (type) {
    case INITIALIZE_AUTHOR:
      return Object.assign({}, state, {
        author: payload,
      })

    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const authorSelector = createSelector(
  stateSelector,
  (state) => state.author,
)
export const isLoaderSelector = createSelector(
  stateSelector,
  (state) => state.isLoader,
)
export const errorSelector = createSelector(
  stateSelector,
  (state) => state.errorMessage,
)

/**
 * Redux thunks
 * */

const getArticle = (id) => (dispatch, getState) => {
  //TODO: Обращение к firebase

  dispatch({
    type: INITIALIZE_AUTHOR,
    payload: {},
  })
}
