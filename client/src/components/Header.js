
import LogIn from './LogIn'
import LogOut from './LogOut'
import Button from './Button'
import Home from './Home'

const Header = (props) => {

  return (
    <div>

      <header className='header'>
        <Home PagesSwitch={props.PagesSwitch} BtnName={props.Pages.HP} />
        <LogIn PagesSwitch={props.PagesSwitch} BtnNameL={props.Pages.LI} BtnNameS={props.Pages.SU} Display={!props.LoggedIn} />
        <LogOut Display={props.LoggedIn} PagesSwitch={props.PagesSwitch} BtnName={props.Pages.HP} SetLog={props.SetLog} />

        <br />
        <br />
        <br />

        <div>
          <h1>Bronson's Bibliotheque</h1>
        </div>

        <main>
          <Button PagesSwitch={props.PagesSwitch} BtnName={props.Pages.P1} Display={true} />
          <Button PagesSwitch={props.PagesSwitch} BtnName={props.Pages.P2} Display={props.LoggedIn} />
          <Button PagesSwitch={props.PagesSwitch} BtnName={props.Pages.P3} Display={props.LoggedIn} />
          <Button PagesSwitch={props.PagesSwitch} BtnName={props.Pages.P4} Display={true} />
          <Button PagesSwitch={props.PagesSwitch} BtnName={props.Pages.P5} Display={true} />
        </main>
      </header>
    </div>
  )
}

export default Header