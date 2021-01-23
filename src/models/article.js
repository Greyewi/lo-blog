import {createSelector} from 'reselect'

/**
 * Constants
 * */

export const moduleName = 'article'
const prefix = moduleName

export const INITIALIZE_ARTICLE = `@@${moduleName}INITIALIZE_ARTICLE`

/**
 * Reducer
 * */

export const ReducerRecord = {
  id: "",
  authorId: "",
  date: "",
  rubricId: "",
  heading: "",
  body: ""
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case INITIALIZE_ARTICLE:
      return Object.assign({}, state, {
        currencyList: payload
      })

    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const articleSelector = createSelector(stateSelector, state => state)

/**
 * Redux thunks
 * */

const getArticle = (id) => (dispatch, getState) => {
  //TODO: Обращение к firebase

  dispatch({
    type: INITIALIZE_ARTICLE,
    payload: {}
  })
}