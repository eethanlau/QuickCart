import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to QuickCart! Our store offers a variety of clothing in various colour palettes and styles.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Our contact information is listed below. Feel free to contact us for any inquiries.
          </span>
        </div> 
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">QuickCart</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>

        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Footer;