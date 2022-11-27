import React from 'react'
import latest from '../latest/latest.css';
import { BsArrowRight,BsPlayCircleFill } from 'react-icons/bs';
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
      <div className="row">
        <div className='col-xs-12 col-sm-6 col-md-3 '>
          <div className='Prodocut_card'>
           <h4 className='Blockchain'>Blockchain</h4>
           <h4 className='Blockchain_text' >Is BlockChain<br/> Technology Worth The H <br/> ...</h4>
           <p>Unfolds The Revolutionary & <br/>Versatility Of Blockchain <br/> Technology ...</p>
           <div className='vide_play_btn_div'>
            <span className='vide_play_btn'><BsPlayCircleFill className='BsPlayCircleFill'/></span>
            <span> 
              <button className='learn_more_btn'>Learn More <BsArrowRight className='arrow-right'/></button>
            </span>
           </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-3 '>
          <div className='Prodocut_card'>
           <h4 className='Blockchain'>Blockchain</h4>
           <h4 className='Blockchain_text' >Is BlockChain<br/> Technology Worth The H <br/> ...</h4>
           <p>Unfolds The Revolutionary & <br/>Versatility Of Blockchain <br/> Technology ...</p>
           <div className='vide_play_btn_div'>
            <span className='vide_play_btn'><BsPlayCircleFill className='BsPlayCircleFill'/></span>
            <span> 
              <button className='learn_more_btn'>Learn More <BsArrowRight className='arrow-right'/></button>
            </span>
           </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-3 '>
          <div className='Prodocut_card'>
           <h4 className='Blockchain'>Blockchain</h4>
           <h4 className='Blockchain_text' >Is BlockChain<br/> Technology Worth The H <br/> ...</h4>
           <p>Unfolds The Revolutionary & <br/>Versatility Of Blockchain <br/> Technology ...</p>
           <div className='vide_play_btn_div'>
            <span className='vide_play_btn'><BsPlayCircleFill className='BsPlayCircleFill'/></span>
            <span> 
              <button className='learn_more_btn'>Learn More <BsArrowRight className='arrow-right'/></button>
            </span>
           </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-3 '>
          <div className='Prodocut_card'>
           <h4 className='Blockchain'>Blockchain</h4>
           <h4 className='Blockchain_text' >Is BlockChain<br/> Technology Worth The H <br/> ...</h4>
           <p>Unfolds The Revolutionary & <br/>Versatility Of Blockchain <br/> Technology ...</p>
           <div className='vide_play_btn_div'>
            <span className='vide_play_btn'><BsPlayCircleFill className='BsPlayCircleFill'/></span>
            <span> 
              <button className='learn_more_btn'>Learn More <BsArrowRight className='arrow-right'/></button>
            </span>
           </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Latest