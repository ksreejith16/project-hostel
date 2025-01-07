import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='r1'>
        <ul className='t1'>
            <li className='f1'><b>Address:</b></li>
            <li className='f1'>ALEAP Industrial area</li>
            <li className='f1'>Pragathi Nagar</li>
            <li className='f1'>Kukatpally</li>
            <li className='f1'>Pin: 500090</li>
            <li className='f1'>Hyderabad</li>
        </ul>
        <ul className='t1'>
            <li className='f1'><b>Contact Us:</b></li>
            <li className='f1'>Phone: +91 1234567890</li>
            <li className='f1'>Email: info@hostelwebsite.com</li>
        </ul>
        <ul className='t1'>
            <li className='f1'><b>Quick Links:</b></li>
            <div className='mainone'>
            <div className='mainson'>
            <li className='f1'><a href="/">Home</a></li>
            <li className='f1'><a href="/eventcalender">Event Calendar</a></li>
            <li className='f1'><a href="/login">Login</a></li>
            <li className='f1'><a href="/langexg">Language Exchange</a></li>
            <li className='f1'><a href="/localinfo">Local Info</a></li>
            </div>
            <div className='mainson'>
            <li className='f1'><a href="/lostfound">Lost and Found</a></li>
            <li className='f1'><a href="/repair">Repair</a></li>
            <li className='f1'><a href="/resouceshare">Resource Share</a></li>
            <li className='f1'><a href="/livechat">Live Chat</a></li>
            <li className='f1'><a href="/feedback">Feedback</a></li>
            </div>
            </div>
        </ul>
        <ul>
          <iframe
            title="Hostel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3342707025977!2d78.39366657493838!3d17.539264883374134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f39b84477a3%3A0xabf9a7da6fc357d3!2sVNRVJIET%20HOSTELS!5e0!3m2!1sen!2sin!4v1716737361967!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ul>
    </footer>
  )
}

export default Footer
