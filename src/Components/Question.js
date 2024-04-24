import React, {useState} from 'react'
import './Question.css'
export default function Question(props) {
  const [showOtherInput, setShowOtherInput] = useState(false)
  const handleOtherInput = (e) => {
    setShowOtherInput(e.target.value === "Other" && e.target.checked)
  }
  return (
    <>
    <div className="questions">
    <div className="fields">
      <form onSubmit={props.submit}>
      <p><b>3.</b> What are you currently doing</p>
      <div className='form-check form-check-inline' style={{marginBottom: "1rem"}}>
        <input className="form-check-input" type="radio" name="Profession" id="inlineRadio1" value="Teaching" onChange={handleOtherInput}/>
        <label className="form-check-label" htmlFor="inlineRadio1">Teaching</label>
      </div>
      <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Profession" id="inlineRadio2" value="Student" onChange={handleOtherInput}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Student</label>
      </div>
      <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Profession" id="inlineRadio3" value="Programmer" onChange={handleOtherInput}/>
        <label className="form-check-label" htmlFor="inlineRadio3">Programmer</label>
      </div>
      <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Profession" id="inlineRadio4" value="Other" onChange={handleOtherInput}/>
        <label className="form-check-label" htmlFor="inlineRadio4">Other</label>
      </div>
      {
        showOtherInput ? (
          <input type="text" className='form-control not-listed-input' placeholder='Type here if not listed' name='other'/>
        ):null
      }
        <p><b>4.</b> Please rate our course</p>
        <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Rating" id="inlineRadio5" value="Poor" />
        <label className="form-check-label" htmlFor="inlineRadio5">Poor</label>
      </div>
      <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Rating" id="inlineRadio6" value="Good" />
        <label className="form-check-label" htmlFor="inlineRadio6">Good</label>
      </div>
      <div className='form-check form-check-inline'>
        <input className="form-check-input" type="radio" name="Rating" id="inlineRadio7" value="Excellent" />
        <label className="form-check-label" htmlFor="inlineRadio7">Excellent</label>
      </div>
        <p style={{marginTop: "1rem"}}><b>5.</b> Write your review here</p>
        <textarea className='form-control' placeholder='Leave your comment here' name='Review'></textarea>
        <button type="submit" class="btn btn-primary" style={{marginTop: "1rem"}}>Submit</button>
      </form>
    </div>
    </div>
    </>
  )
}




