import React from 'react'
import Style from '../Big_stories/Stories.css';
import { BsArrowRight } from 'react-icons/bs';
const Stories = () => {
  return (
    <div className='container storie_main'>
        <div className='Big_stories_card'>
          <h1 className='lets_create'>Let's Create Big Stories Together</h1>
          <p className='lets_create_para'>Mobile is in our nevers. We don't just bulid 
          apps, we create brand. <br/>
          Choosing us will be your best decision.</p>
          <button className='btn_Get_A_Quote'>Get A Quote <BsArrowRight className='Arrow'/>   </button>
        </div>

    </div>
  )
}

export default Stories