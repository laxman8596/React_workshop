import React from 'react'
import Sociall from '../Social_Media/Social.css'
const Social = () => {
  return (
    <>
 <div className='container-fluid'>
    <h3 className='Social_Media_Heading'>Social Media</h3>
    <div className='row social_media '>
        <div className='col-6'>
            <p className='social_para'>Don't Miss To Follow Us On Our Social <br/>
           Networks Accounts.</p>
        </div>
        <div className='col-6 social_media_icos'>
            <div className='card-Social_Media'>
                <a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20log%20in%7C&placement=&creative=589460569900&keyword=facebook%20log%20in&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409266755%26loc_physical_ms%3D1007740%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jHsSgfCiyGHhoq2pBo9ynlDzz-u97YiTfaQ5SqU8t47eiskezJdPXwaAmRZEALw_wcB'>
                <img className='social_icon_img' src='./images/fb.png'/>
                </a>
            </div>
            <div className='card-Social_Media'>
            <a href='https://twitter.com/i/flow/login'>
                <img className='social_icon_img' src='./images/tw-icon.jpg'/>
            </a>
            </div>
            
            <div className='card-Social_Media'>
                <a href='https://www.instagram.com/'>
                    <img className='social_icon_img' src='./images/insta.jpg'/>
                </a>
            
            </div>
            <div className='card-Social_Media'>
                <a href='https://www.linkedin.com/home'>
                    <img className='social_icon_img' src='./images/likedin.png'/>
                </a>
           
            </div>
            <div className='card-Social_Media'>
                <a href='https://www.youtube.com/'>
                    <img className='social_icon_img' src='./images/yt-icon.jpg'/>
                </a>
           
            </div>
            <div className='card-Social_Media'>
                <a href='https://www.google.com/'>
                    <img className='social_icon_img' src='./images/Google.png'/>
                </a>
           
            </div>
        </div>
    </div>
 </div>
    </>
  )
}

export default Social