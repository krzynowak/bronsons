
const LogOut = (props) => {

    if (props.Display) {
        return (
            <div className='Log'>
                <button className='Log' type="button" onClick={() => { props.SetLog(0); props.PagesSwitch(props.BtnName) }}>Logout</button>
            </div>
        )
    }
    else {
        return null
    }
}

export default LogOut