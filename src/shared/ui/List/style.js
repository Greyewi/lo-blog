import styled from 'styled-components'

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemImage = styled.img.attrs(props => ({
  src: props.src
}))`
  max-width: 300px;
  max-height: 250px;
`