import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import articleReducer, { moduleName as articleModule } from '../models/article'
import articleListReducer, { moduleName as articleListModule } from '../models/articlesList'
import authorReducer, { moduleName as authorModule } from '../models/author'
import authorsListReducer, { moduleName as authorsListModule } from '../models/authorsList'
import rubricsListReducer, { moduleName as rubricsListModule } from '../models/rubricsList'

export default combineReducers({
  router: connectRouter(history),
  form: formReducer,
  [articleModule]: articleReducer,
  [articleListModule]: articleListReducer,
  [authorModule]: authorReducer,
  [authorsListModule]: authorsListReducer,
  [rubricsListModule]: rubricsListReducer,
})
