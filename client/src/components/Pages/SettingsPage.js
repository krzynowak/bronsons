
import { useState, useEffect } from 'react'

const SettingsPage = ({ LoggedIn, setLoggedIn, PagesSwitch, destination }) => {


    const [funds, setfunds] = useState(0);
    const [name, setName] = useState('');
    const [paswdc, setpaswdc] = useState('');
    const [paswd1, setpaswd1] = useState('');
    const [paswd2, setpaswd2] = useState('');

    const [fundsC, setfundsC] = useState(0);
    const [nameC, setNameC] = useState('');


    function updateSite() {
        fetch("http://localhost:81/settings?UserId=" + String(LoggedIn))
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)

                    setfundsC(result[0].UserFunds);
                    setNameC(result[0].AuthorName);
                },
                (error) => {
                }
            )
    }


    useEffect(() => { updateSite() }, []);


    const submitFormName = (e) => {

        e.preventDefault()

        fetch("http://localhost:81/settingsN"
            + "?UserId=" + String(LoggedIn)
            + "&name=" + String(name),
            { method: 'POST' })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)

                    updateSite();
                },
                (error) => {
                }
            )

        setfunds(0)
    }

    const submitFormFunds = (e) => {

        e.preventDefault()

        fetch("http://localhost:81/settingsF"
            + "?UserId=" + String(LoggedIn)
            + "&funds=" + String(funds),
            { method: 'POST' })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    updateSite();
                },
                (error) => {
                }
            )

        setfunds(0)
    }


    const submitFormPssword = (e) => {

        e.preventDefault()

        if (paswd1 === paswd2) {
            fetch("http://localhost:81/settingsP"
                + "?UserId=" + String(LoggedIn)
                + "&passOld=" + String(paswdc)
                + "&passNew=" + String(paswd1),
                { method: 'POST' })
                .then(res => res.json())
                .then(
                    (result) => {
                        //console.log(result)


                        setpaswdc('');
                        setpaswd1('');
                        setpaswd2('');

                    },
                    (error) => {
                        setpaswdc('');
                        setpaswd1('');
                        setpaswd2('');
                    }
                )
        }
        else {
            alert('Passwords don\'t match')
        }
    }

    const submitFormDelete = (e) => {
        e.preventDefault()

        fetch("http://localhost:81/settingsD?UserId=" + String(LoggedIn),
            { method: 'POST' })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    setLoggedIn(0);
                    PagesSwitch(destination);
                },
                (error) => {
                }
            )

    }



    return (
        <div className='MainObj'>

            <form className='centerHelpForm' onSubmit={submitFormName}>
                <h2>
                    Set Pen Name ( {nameC} -&gt; ? )
                </h2>

                <input type="text" id="name" name="name" required placeholder='Pen Name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <input className="subButton" type='submit' defaultValue="Change Password" />
            </form>

            <form className='centerHelpForm' onSubmit={submitFormFunds}>
                <h2>
                    Add funds (Currently: {fundsC})
                </h2>

                &#36; <input type="number" id="quantity" name="quantity" min="10" max="150" required placeholder='Funds' value={funds} onChange={(e) => setfunds(e.target.value)} /><br /><br />
                <input className="subButton" type='submit' defaultValue="Change Password" />
            </form>


            <form className='centerHelpForm' onSubmit={submitFormPssword}>
                <h2>
                    Change Password
                </h2>

                <label >Current Password</label><br />
                <input type="password" id="passwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={paswdc} onChange={(e) => setpaswdc(e.target.value)} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />

                <label >New Password</label><br />
                <input type="password" id="passwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={paswd1} onChange={(e) => setpaswd1(e.target.value)} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />

                <label >New Password Retype</label><br />
                <input type="password" id="passwdRt" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={paswd2} onChange={(e) => setpaswd2(e.target.value)} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />

                <input className="subButton" type='submit' defaultValue="Change Password" />
            </form>

            <form className='centerHelpForm' onSubmit={submitFormDelete}>

                <h2>
                    Delete Account
                </h2>
                <input className="subButton" type='submit' defaultValue="Delete Account" />
            </form>

        </div>
    )
}

export default SettingsPage