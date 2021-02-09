import React from "react";
import {Image} from './style'

const Loader = (loaderImg = 'https://i.stack.imgur.com/ndqUb.gif') => {

  return <div>
    <Image src={loaderImg} />
  </div>
}


export default Loader