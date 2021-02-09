import React from "react";
import Loader from "../Loader";
import {ListContainer, Item, ItemText, ItemImage} from './style'

const List = (props) => {
  const {list, isLoader, error} = props

  if(isLoader){
    return <Loader/>
  }

  if(error){
    return error
  }

  return (
    <ListContainer>
      {list && list.length && list.map((item, key) => <div key={key}>
        <div>{item.date}</div>
        <Item>
          <ItemImage src={item.image}/>
          <ItemText>{item.text}</ItemText>
        </Item>
      </div>)}
    </ListContainer>
  )
}

export default List