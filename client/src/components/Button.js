
const Button = (props) => {

    if (props.Display) {
        return (
            <button className={props.class} type="button" onClick={() => { props.PagesSwitch(props.BtnName) }}>{props.BtnName}</button>
        )
    }
    else {
        return null
    }
}

export default Button