import React from 'react'
import latest from '../latest/latest.css';
import { BsArrowRight } from 'react-icons/bs';
const Latest = () => {
  return (
    <>
    <div className=' container-fluid latest_main'>
      <h2>Our Latest Prodcuts</h2>
      <div className='latest_para_button'>
      <div>
        <p>
        Listen Technology Based Podcast Hosted By Hyperlink InfoSystem.
        </p>
      </div>
      <div>
        <button className='latest_veiw_all_btn'>Veiw All <BsArrowRight className='arrow-right'/></button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Latest