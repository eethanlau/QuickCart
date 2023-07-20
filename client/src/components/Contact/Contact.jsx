import React from 'react'
import "./Contact.scss"
import FaceBookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import PinterestIcon from "@mui/icons-material/Pinterest"


//Import Icons accordingly
const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>CONTACT US!</span>
        <div className="mail">
          <input type="text" placeholder="Enter an e-mail address..."/>
          <button>JOIN QUICKCART</button>
        </div>
        <div className="icons">
          <FaceBookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <PinterestIcon/>
        </div>
      </div>
    </div>
  )
}

export default Contact