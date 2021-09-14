import placeholder from './../../images/placeholder1.png';
import { useState, useEffect } from "react";

const ItemPage = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    const final = [];

    useEffect(() => {
        fetch("http://localhost:81/books")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);


    function renderPicture(renderPic) {
        if (renderPic) {
            return <img src={placeholder} width="150" height="200" alt="Placeholder" />
        }
        else {
            return <img src={placeholder} width="150" height="200" alt="Placeholder" />
        }
    }

    function renderList() {
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            let keyI = 1;
            for (let book of books) {
                final.push(
                    <div key={keyI} className='ListElem' onClick={() => { props.PagesSwitch(props.Pages.IT); props.setBook(book.BookId) }}>

                        {renderPicture(book.BookCover === null)}

                        <div className='desc'>
                            <h3>{book.BookTitle}</h3><br />
                            <p>{book.BookDesc}</p>
                        </div>
                        <div className='tags'>
                            <h3>Tags</h3><br />
                            <p>{book.tagStr_1}</p>
                            <p>{book.tagStr_2}</p>
                            <p>{book.tagStr_3}</p>
                        </div>
                        <div className='tags'>
                            <h3>Author</h3><br />
                            <p>{book.AuthorName}</p>
                        </div>
                    </div>
                );
                keyI = keyI + 1;
            }

            return final;
        }
    }

    return (
        <div className='MainObj'>
            <p>ItemPage</p>

            {renderList()}

        </div>
    )
}

export default ItemPage