import { createSelector } from 'reselect'

/**
 * Constants
 * */

export const moduleName = 'articleList'
const prefix = moduleName

export const INITIALIZE_ARTICLE_LIST = `@@${moduleName}INITIALIZE_ARTICLE_LIST`

/**
 * Reducer
 * */

/*export const ReducerRecord = {
    id: "",
    authorId: "",
    authorImg: "",
    date: "",
    rubricId: "",
    heading: ""
}*/

/**
 или делать сразу большой объект включающий с себя все данные в ветках.
 но тогда не нужна отдельная модель для списка, всё можно получить из одного
 объекта через filter и map.
 {
    articles: {
        articleId: "",
        authorId: "",
        articleDate: "",
        rubricId: "",
        articleImg: "",
        heading: "",
        body: ""
    },
    authors: {
        authorId: "",
        authorName: "",
        authorInfo: "",
        authorImg: "",
        authorContact: {
            facebook: "",
            email: "",
            whatsapp: ""
        }
    },
    rubrics: {
        rubricId: "",
        rubricName: ""
    }
}

 * */

export const ReducerState = {
  articleList: [],
  activeArticleId: null,
  isLoader: false,
  errorMessage: '',
}

export const ReducerRecord = {
  articleId: '',
  authorId: '',
  articleDate: '',
  rubricId: '',
  articleImg: '',
  heading: '',
}

export default function reducer(state = ReducerState, action) {
  const { type, payload } = action

  switch (type) {
    case INITIALIZE_ARTICLE_LIST:
      return Object.assign({}, state, {
        currencyList: payload,
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
  (state) => state,
)

/**
 * Redux thunks
 * */

export const getArticleList = (id) => (dispatch, getState) => {
  //TODO: Обращение к firebase

  dispatch({
    type: INITIALIZE_ARTICLE_LIST,
    payload: {},
  })
}
