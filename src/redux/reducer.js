import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import articleReducer, { moduleName as articleModule } from '../models/article'

export default combineReducers({
  router: connectRouter(history),
  form: formReducer,
  [articleModule]: articleReducer,
})
