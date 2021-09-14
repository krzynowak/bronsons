

import ItemPage from './Pages/ItemPage'
import FAQPage from './Pages/FAQPage'
import LogInForm from './Pages/LogInForm'
import SignUpForm from './Pages/SignUpForm'
import HelpForm from './Pages/HelpForm'
import ManagePage from './Pages/ManagePage'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import SettingsPage from './Pages/SettingsPage'
import PurchasedPage from './Pages/PurchasedPage'

import Item from './Pages/Item'


const UserSpace = (props) => {

  function renderSwitch(param) {
    switch (param.page) {
      case props.Pages.HP:
        return <HomePage />;
      case props.Pages.P1:
        return <ItemPage PagesSwitch={props.PagesSwitch} Pages={props.Pages} setBook={props.setBook} />;
      case props.Pages.P2:
        return <ManagePage LoggedIn={props.LoggedIn} PagesSwitch={props.PagesSwitch} Pages={props.Pages} />;
      case props.Pages.P3:
        return <SettingsPage LoggedIn={props.LoggedIn} setLoggedIn={props.setLoggedIn} PagesSwitch={props.PagesSwitch} destination={props.Pages.HP} />;
      case props.Pages.P4:
        return <HelpForm />;
      case props.Pages.P5:
        return <FAQPage />;
      case props.Pages.LI:
        return <LogInForm PagesSwitch={props.PagesSwitch} Pages={props.Pages} setLoggedIn={props.setLoggedIn} />;
      case props.Pages.SU:
        return <SignUpForm PagesSwitch={props.PagesSwitch} Pages={props.Pages} />;
      case props.Pages.IT:
        return <Item bookId={props.book} PagesSwitch={props.PagesSwitch} destination={props.Pages.PP} />;
      case props.Pages.AD:
        return <AddPage LoggedIn={props.LoggedIn} />;
      case props.Pages.PP:
        return <PurchasedPage />;


      default:
        return 'TODO';
    }
  }

  return (
    <div>
      <main>
        {renderSwitch(props)}

      </main>
    </div>
  )
}

export default UserSpace