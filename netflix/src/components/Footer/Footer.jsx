import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
   
      <div className="footer-outer-container">
        <div className="footer-container">
          <div className="social-icos">
              <ul>
                <li><FacebookOutlinedIcon /></li>
                <li><InstagramIcon /></li>
                <li><YouTubeIcon /></li>
              </ul>
          </div>

          <div className="cols">
            <div className="col-4">
              
               <h3>Audio Description</h3>
               <h3>Invester Relation</h3>
               <h3>Legal Notices</h3>
               <button className='footer-button'>Services Code</button>
               <h3>&copy; 1997-2025 Netflix, Inc.</h3>
            </div>

            <div className="col-4">
              <h3>Help Center</h3>
              <h3>Jobs</h3>
              <h3>Cookie Preference</h3>
            </div>

            <div className="col-4">
              <h3>Gift Cards</h3>
              <h3>Terms of Uses</h3>
              <h3>Cooperate Information</h3>
            </div>

            <div className="col-4">
              <h3>Media Center</h3>
              <h3>Privacy</h3>
              <h3>Contact Us</h3>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Footer
