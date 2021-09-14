
import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import UserSpace from './components/UserSpace'

function App() {


  const PAGES = {
    HP : "Homepage",
    P1 : "Browse",
    P2 : "Manage",
    P3 : "Settings",
    P4 : "Help",
    P5 : "FAQ",
    LI : "Log In",
    SU : "Sign Up",
    IT : "Item",
    AD : "Add Item",
    PP : "Purchased Item"
  }

  const [pageDis, setpageDis] = useState(PAGES.HP);
  const [LoggedIn, setLoggedIn] = useState(0);
  const [BookId, setBookId] = useState(0);



  return (
    <div>
    <Header LoggedIn={LoggedIn} Pages={PAGES} PagesSwitch={setpageDis} SetLog={setLoggedIn}/>
    <UserSpace LoggedIn={LoggedIn} page={pageDis} Pages={PAGES} PagesSwitch={setpageDis} book={BookId} setBook={setBookId} setLoggedIn={setLoggedIn}/>
  </div>
  );
}

export default App;
