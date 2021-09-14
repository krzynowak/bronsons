
const PurchaseButton = ({ id, PagesSwitch, destination }) => {
    return (
        <button className='prchsBtn' type="button" onClick={() => { PagesSwitch(destination) }}>Purchase</button>
    )
}

export default PurchaseButton