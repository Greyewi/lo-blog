import Main from './Main'
import { connect } from 'react-redux'
import { articleListSelector, getArticleList } from '../../models/articlesList'

export default connect(
  (state) => ({
    articleList: articleListSelector(state),
  }),
  { getArticleList },
)(Main)
