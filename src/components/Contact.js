import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page" dir="rtl">
      <div className="contact-container">
        <h2>اتصل بنا / Contact Us</h2>
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📱</div>
            <h3>الهاتف / Phone</h3>
            <a href="tel:+96171431651" className="contact-link" dir='ltr' style={{textDecoration:'none' , color:'red'}}>
              +96171431651
            </a>
          </div>
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>العنوان / Address</h3>
            <a style={{textDecoration:'none',color:'red'}}
              href="https://maps.app.goo.gl/V4rhhocUKEaV1qdA7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <p>روضة الشهيدين ، جنب اذاعة الرسالة</p>
            </a>
          </div>
          <div className="info-card">
            <div className="icon">⏰</div>
            <h3>ساعات العمل / Hours</h3>
            <p style={{color:'red'}}>Daily: 2PM - 12AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;