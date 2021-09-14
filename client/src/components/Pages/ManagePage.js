import placeholder from './../../images/placeholder1.png';
import Button from './../Button'
import { useState, useEffect } from "react";

const ManagePage = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    const final = [];

    function initPage() {
        fetch("http://localhost:81/booksManage?ID=" + String(props.LoggedIn))
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    setIsLoaded(true);
                    setBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }


    useEffect(() => { initPage() }, []);

    function ChangeState(bookId, newState) {

        fetch("http://localhost:81/booksStatus?ID=" + String(bookId) + "&newState=" + String(newState), { method: 'POST' })
            .then(res => res.json())
            .then(
                (result) => {
                    initPage();
                },
                (error) => { alert(error) }
            )
    }

    function deleteBook(bookId) {

        fetch("http://localhost:81/booksDelete?ID=" + String(bookId), { method: 'POST' })
            .then(res => res.json())
            .then(
                (result) => {
                    initPage();
                },
                (error) => { alert(error) }
            )
    }


    function renderList() {

        function status(stat) {
            if (!stat) {
                return <button className='statBtn2'>Disabled</button>
            }
            else {
                return <button className='statBtn1'>Enabled</button>
            }
        }


        function statusChange(id, stat) {
            //console.log({ id })
            if (stat) {
                return <button onClick={() => { ChangeState(id, false) }}>Disable</button>
            }
            else {
                return <button onClick={() => { ChangeState(id, true) }}>Enable</button>
            }
        }

        function renderPicture(renderPic) {
            if (renderPic) {
                return <img src={placeholder} width="150" height="200" alt="Placeholder" />
            }
            else {
                return <img src={placeholder} width="150" height="200" alt="Placeholder" />
            }
        }


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
                    <div key={keyI} className='ListElem'>
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
                        <div className='manageBtns'>
                            {status(book.BookStatus)}
                            {statusChange(book.BookId, book.BookStatus)}
                            <button onClick={() => { deleteBook(book.BookId) }}>Delete</button>
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
            <Button class='addBtn' PagesSwitch={props.PagesSwitch} BtnName={props.Pages.AD} Display={true} />
            {renderList()}

        </div>
    )
}

export default ManagePage