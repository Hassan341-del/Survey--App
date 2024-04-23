import React from 'react'
import './Name.css'
export default function Name(props) {
  return (
    <>
    <div className="name">
    <div className="name-bg">
    <form onSubmit={props.submit}>
      <div className="mb-3">
        <label htmlFor="name" className='form-label'><b>1.</b> Name</label>
        <input name='name' type="text" id='name' className='form-control' placeholder='Please enter your name' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className='form-label'><b>2.</b> Email</label>
        <input name='email' type="email" id='email' className='form-control' placeholder='Please enter your email' required/>
      </div>
      <button type="submit" class="btn btn-primary">Start</button>
    </form>
    </div>
    </div>
    </>
  )
}
