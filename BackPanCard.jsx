import React from 'react'
import panBack from './images/pan-card-back.jpg'

const BackPanCard = () => {
  return (
    <div className="pancard">
      <div className="pan-container2">
        {/* <img src={panBack} alt="" /> */}
        <pre>
          इस कार्ड के खोने/पाने पर कृपया संपर्क करें/ लौटायें: <br />
          आयकर पैन सेवा इकाई, एन एस डी एल<br />
          ५ वीं मंजिल, मंत्रि स्टर्लिंग,<br />
          प्लॉट नं. ३४१, सर्वे नं. ९९७/८,<br />
          मॉडल कॉलोनी, दीप बंगला चौक के पास,<br />
          पुणे - ४११ ०१६.<br /><br />

          If this card is lost / someone’s lost card is found,<br />
          please inform / return to :<br />
          Income Tax PAN Services Unit, NSDL<br />
          5th Floor, Mantri Sterling,<br />
          Plot No. 341, Survey No. 997/8,<br />
          Model Colony, Near Deep Bungalow Chowk,<br />
          Pune - 411 016.<br /><br />

          Tel: 91-20-2721 8080, Fax: 91-20-2721 8081<br />
          e-mail: tininfo@nsdl.co.in
        </pre>
        <div className='pan-Hologram'>
        </div>
      </div>
    </div>
  )
}

export default BackPanCard