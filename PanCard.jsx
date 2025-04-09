import React, { useState } from 'react'
import './pancard.css'
import BackPanCard from './BackPanCard'
import frontSample from './images/download.jpeg'
import panPhoto from './images/photo.jpg'
import qrCode from './images/qr.png'
const PanCard = () => {
  let [bool, setBool] = useState(false)

  let handleClick = () => {
    setBool(!bool)
  }
  return (
    <div className="pancard">
      <div className="header">
        <h1>PanCard</h1>
      </div>

      <div className="pan-container" onClick={handleClick}>
        <div className={`flip-inner ${bool ? 'flipped' : ''}`}>
          <div className="front">

            <div className="pan-header">
              <div className="incomeDepartment">
                <pre><h1>आयकर विभाग</h1></pre>
                <pre><h1>INCOME TAX DEPARTMENT</h1></pre>
              </div>
              <div className="govtOfIndia">
                <pre><h1>भारत सरकार</h1></pre>
                <pre><h1>GOVT OF INDIA</h1></pre>
              </div>
            </div>

            <div className="pan-midBody">
              <div className="pan-photo">
                <img src={panPhoto} alt="" />
                <pre>
                  <h3>नाम / Name <br />
                    Ankit Kumar <br />
                    <br />
                    पिता का नाम / Father's Name <br />
                    xxxxxxxxxxxxxx <br />
                    <br />
                    जन्म की तारीख/ <br />
                    Date of Birth <br />
                    DD/MM/YYYY</h3>
                </pre>

              </div>
              <div className="pan-number">
                <h2>JVUNK4048J</h2>
                <h5>हस्ताक्षर / signature</h5>
              </div>
              <div className="qr">
                <img src={qrCode} alt="" />
              </div>
            </div>
          </div>
          <div className="back">
            <BackPanCard />
          </div>
        </div>
      </div>

      {/* <img src={frontSample} alt="" /> */}
    </div>
  )
}

export default PanCard;