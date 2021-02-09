import { createSelector } from 'reselect'

import { rubricsList } from '../mocks/rubricks'

/**
 * Constants
 * */

export const moduleName = 'rubricsList'
export const INITIALIZE_RUBRICS_LIST = `@@${moduleName}/INITIALIZE_RUBRICS_LIST`

/**
 * Reducer
 * */


export const ReducerState = {
    rubricsList: [],
    activeRubricId: null,
    isLoader: false,
    errorMessage: '',
}


export default function reducer(state = ReducerState, action) {
    const { type, payload } = action

    switch (type) {
        case INITIALIZE_RUBRICS_LIST:
            return Object.assign({}, state, {
                rubricsList: payload,
            })

        default:
            return state
    }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const rubricsListSelector = createSelector(
    stateSelector,
    (state) => state.rubricsList,
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

const getRubricsList = (id) => (dispatch, getState) => {
    //TODO: Обращение к firebase

    dispatch({
        type: INITIALIZE_RUBRICS_LIST,
        payload: rubricsList,
    })
}
