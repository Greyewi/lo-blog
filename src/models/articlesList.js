import { createSelector } from 'reselect'

import { articlesList } from '../mocks/articles'

/**
 * Constants
 * */

export const moduleName = 'articleList'

export const INITIALIZE_ARTICLE_LIST = `@@${moduleName}/INITIALIZE_ARTICLE_LIST`

/**
 * Reducer
 * */

export const ReducerState = {
  articleList: [],
  activeArticleId: null,
  isLoader: false,
  errorMessage: '',
}

export default function reducer(state = ReducerState, action) {
  const { type, payload } = action

  switch (type) {
    case INITIALIZE_ARTICLE_LIST:
      return Object.assign({}, state, {
        articleList: payload,
      })

    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const articleListSelector = createSelector(
  stateSelector,
  (state) => state.articleList,
)

/**
 * Redux thunks
 * */

export const getArticleList = (id) => (dispatch, getState) => {
  //TODO: Обращение к firebase

  dispatch({
    type: INITIALIZE_ARTICLE_LIST,
    payload: articlesList,
  })
}
