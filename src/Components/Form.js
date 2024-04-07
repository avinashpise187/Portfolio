import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="6" placeholder="Type Your Message Here..!"></textarea>
            <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default Form