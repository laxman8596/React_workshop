import React from 'react'
import work from '../work/work.css'
const Work = () => {
  return (
    <>
       <div className='work_main'>
        <div className='row  row_col'>
          <div className='col-5 who_we_div '>
            <h2 className='who_we'>Who We Work With</h2>
            <p>
            As a leading mobile app development company in USA and India, we worked with 2000+ businesses either it is a start-up or enterprise and delivers the best solution in the industry. At Hyperlink InfoSystem, we offer a broad range of app development services based on business requirements.
            </p>
          </div>

          <div className='col-7 cards_flex_wrap'>
           
          <div className='row col-xs-6 col-sm-6'>
          <div className='card text-center'>
            <h5 className='company_names'>Start Up Business</h5>
          </div>
          <div className='card text-center'>
          <h5 className='company_names'>Small & Medium Business</h5>
          </div>
          </div>
          <div className='row col-xs-6 col-sm-6'>
          <div className='card text-center'>
          <h5 className='company_names'>Enterprise</h5>
          </div>
          <div className='card text-center'>
          <h5 className='company_names'>Agencies</h5>
          </div>
          </div>
          
        
           
           

           
        </div>
        </div>
       </div>
    </>
  )
}

export default Work