
import { useState } from 'react'


const LogInForm = ({ PagesSwitch, Pages, setLoggedIn }) => {

  const [lName, setlName] = useState('');
  const [lPsswd, setPsswd] = useState('');
  const submitForm = (e) => {

    e.preventDefault()
    fetch("http://localhost:81/logUsser"
      + "?lName=" + String(lName)
      + "&lPsswd=" + String(lPsswd),
      { method: 'POST' })
      .then(res => res.json())
      .then(
        (result) => {
          if (null != result[0]) {
            //console.log(result[0].UserId)
            setlName('')
            setPsswd('')

            PagesSwitch(Pages.HP)
            setLoggedIn(result[0].UserId)
          }
          else {
            alert("User doesn't exist")
          }
        },
        (error) => {
        }
      )

  }


  return (
    <div className='MainObj' onSubmit={submitForm}>

      <form className='centerForm' onSubmit={submitForm}>
        <label >Username</label><br />
        <input type="text" id="uname" required placeholder='Username' value={lName} onChange={(e) => setlName(e.target.value)} /><br /><br />

        <label >Password</label><br />
        <input type="password" id="psswd" required placeholder='Password' value={lPsswd} onChange={(e) => setPsswd(e.target.value)} /><br /><br />

        <input className="subButton" type='submit' defaultValue="Log In" />
      </form>
    </div>
  )
}

export default LogInForm