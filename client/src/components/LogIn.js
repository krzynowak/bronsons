
import Button from './Button'

const LogIn = (props) => {

    return (
        <div className='Log'>
            <Button class='Log' BtnName={props.BtnNameL} PagesSwitch={props.PagesSwitch} Display={props.Display} />
            <Button class='Log' BtnName={props.BtnNameS} PagesSwitch={props.PagesSwitch} Display={props.Display} />
        </div>
    )
}

export default LogIn