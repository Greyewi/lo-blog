import { createSelector } from 'reselect'

/**
 * Constants
 * */

export const moduleName = 'authorsList'
export const INITIALIZE_AUTHORS_LIST = `@@${moduleName}INITIALIZE_AUTHORS_LIST`

/**
 * Reducer
 * */


export const ReducerState = {
    authorsList: [],
    activeAuthorId: null,
    isLoader: false,
    errorMessage: '',
}


export default function reducer(state = ReducerState, action) {
    const { type, payload } = action

    switch (type) {
        case INITIALIZE_AUTHORS_LIST:
            return Object.assign({}, state, {
                authorsList: payload,
            })

        default:
            return state
    }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const authorsListSelector = createSelector(
    stateSelector,
    (state) => state.authorsList,
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

const getAuthorsList = (id) => (dispatch, getState) => {
    //TODO: Обращение к firebase

    dispatch({
        type: INITIALIZE_AUTHORS_LIST,
        payload: {},
    })
}
