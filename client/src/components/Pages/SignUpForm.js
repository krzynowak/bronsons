
import { useState } from 'react'

const SignUpForm = ({ PagesSwitch, Pages }) => {

  const [uname, setUname] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passR, setPassR] = useState('');


  const submitForm = (e) => {
    e.preventDefault();

    if (pass === passR) {

      fetch("http://localhost:81/userAdd"
        + "?uname=" + String(uname)
        + "&mail=" + String(mail)
        + "&pass=" + String(pass),
        { method: 'POST' })
        .then(
          (result) => {
            PagesSwitch(Pages.HP)
          },
          (error) => { }
        )

      setUname('');
      setMail('');
      setPass('');
      setPassR('');
    }
  }



  return (
    <div className='MainObj'>

      <form className='centerForm' onSubmit={submitForm}>

        <label >Username</label><br />
        <input type="text" id="uname" value={uname} onChange={(e) => setUname(e.target.value)} required /><br /><br />

        <label >Email</label><br />
        <input type="email" id="email" value={mail} onChange={(e) => setMail(e.target.value)} required /><br /><br />

        <label >Password</label><br />
        <input type="text" id="passwd" value={pass} onChange={(e) => setPass(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />

        <label >Password Retype</label><br />
        <input type="text" id="passwdRt" value={passR} onChange={(e) => setPassR(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />

        <input className="subButton" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUpForm