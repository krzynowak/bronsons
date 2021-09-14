
import { useState } from 'react'


const HelpForm = () => {

  const [hName, sethName] = useState('');
  const [hEmail, sethEmail] = useState('');
  const [hMsg, sethMsg] = useState('');

  const submitForm = (e) => {

    e.preventDefault();

    fetch("http://localhost:81/message"
      + "?name=" + String(hName)
      + "&mail=" + String(hEmail)
      + "&msg=" + String(hMsg),
      { method: 'POST' })
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          sethName('')
          sethEmail('')
          sethMsg('')
          alert('Msg Sent')

        },
        (error) => {
        }
      )


  }



  return (
    <div className='MainObj'>

      <form className='centerHelpForm' id='helpForm' onSubmit={submitForm}>


        <label >Name</label><br />
        <input type="text" id="name" required placeholder='Name' value={hName} onChange={(e) => sethName(e.target.value)} /><br /><br />

        <label >Email</label><br />
        <input type="email" id="email" required placeholder='Email' value={hEmail} onChange={(e) => sethEmail(e.target.value)} /><br /><br />

        <label >Message</label><br />
        <textarea name="comment" form="helpForm" maxLength={500} required placeholder='Enter text here...' row={5} col={30} value={hMsg} onChange={(e) => sethMsg(e.target.value)} />

        <br />

        <input className="subButton" type='submit' defaultValue="Log In" />
      </form>


    </div>
  )
}

export default HelpForm