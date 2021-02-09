import {useEffect} from 'react'
import List from '../../shared/ui/List'

const Main = (props) => {
  const { getArticleList, articleList } = props

  useEffect(() => {
    getArticleList()
  }, [getArticleList])

  return (
    <section>
      <div></div>
      <div>
        <List list={articleListFormatter(articleList)}/>
      </div>
    </section>
  )
}

export default Main

const articleListFormatter = list => {
  const result = []
  list && list.length && list.map((item) => {
    result.push({
      date: item.date,
      image: item.image,
      text: item.heading
    })
  })
  return result
}