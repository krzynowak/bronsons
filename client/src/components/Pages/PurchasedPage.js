
import placeholder from './../../images/tempPdf.pdf';

const PurchasedPage = () => {
    return (
        <div className='MainObj'>
            <a href={placeholder} download>
                <button className="subButton" >Download</button>
            </a>
        </div>
    )
}

export default PurchasedPage