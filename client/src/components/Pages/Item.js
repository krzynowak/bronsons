import placeholder from './../../images/placeholder1.png';
import PurchaseButton from './../PurchaseButton.js';
import { useState, useEffect } from "react";

const Item = ({ bookId, PagesSwitch, destination }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);
  
  function getData (bId) {
    fetch("http://localhost:81/book?ID=" + String(bId))
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result[0])
          setIsLoaded(true);
          setItem(result[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  useEffect(() => {getData(bookId)}, []);

  function renderPicture(renderPic) {
    if (renderPic) {
      return <img src={placeholder} width="150" height="200" alt="Placeholder" />
    }
    else {
      return <img src={placeholder} width="150" height="200" alt="Placeholder" />
    }
  }

  function renderItem() {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className='MainObj'>
          <h2>Selected Item</h2>
          <div className='SingleEleme' >

            <div className='block'>
              {renderPicture(item.BookCover === null)}
              <div className='desc'>
                <h3>{item.BookTitle} </h3><br />
                <p>{item.BookDesc}</p>
              </div>
              <div className='tags'>
                <h3>Tags</h3><br />
                <p>{item.tagStr_1}</p>
                <p>{item.tagStr_2}</p>
                <p>{item.tagStr_3}</p>
              </div>
              <div className='tags'>
                <h3>Author</h3><br />
                <p>{item.AuthorName}</p>
              </div>
            </div>


            <div>
              <div className='block'>
                <div className='tags'>
                  <h3>Pages</h3><br />
                  <p>{item.BookPages}</p>
                </div>

                <div className='tags'>
                  <h3>Price</h3><br />
                  <p>$ {item.BookPrice}</p>
                </div>

                <div className='tags'>
                  <PurchaseButton id={bookId} PagesSwitch={PagesSwitch} destination={destination} />
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    renderItem()
  )
}

export default Item