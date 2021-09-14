
import { useState, useEffect } from 'react'

const AddPage = ({ LoggedIn }) => {

  const [title, settitle] = useState('');
  const [price, setprice] = useState(0);
  const [pages, setpages] = useState(1);
  const [tag1, settag1] = useState(0);
  const [tag2, settag2] = useState(0);
  const [tag3, settag3] = useState(0);
  const [desc, setdesc] = useState('');
  const [cover, setcover] = useState('');
  const [file, setfile] = useState('');


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tags, settags] = useState([]);
  const final = [];


  useEffect(() => {
    fetch("http://localhost:81/booksTags")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          setIsLoaded(true);
          settags(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);


  function renderList() {

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      for (let tag of tags) {

        final.push(
          <tr>
            <th>{tag.TagId}</th>
            <th>{tag.TagStr}</th>
          </tr>
        );

      }

      return final;
    }
  }


  const submitForm = (e) => {
    e.preventDefault();

    fetch("http://localhost:81/booksAdd"
      + "?UserId=" + String(LoggedIn)
      + "&title=" + String(title)
      + "&price=" + String(price)
      + "&pages=" + String(pages)
      + "&tag1=" + String(tag1)
      + "&tag2=" + String(tag2)
      + "&tag3=" + String(tag3)
      + "&desc=" + String(desc)
      + "&cover=" + String(cover)
      + "&file=" + String(file),
      { method: 'POST' })
      .then(res => res.json())
      .then(
        (result) => {
        },
        (error) => {
          //console.log(error)
        }
      )

    settitle('');
    setprice(0);
    setpages(1);
    settag1(0);
    settag2(0);
    settag3(0);
    setdesc('');
    setcover('');
    setfile('');
  }


  return (
    <div className='MainObj'>
      <form className='centerForm' onSubmit={submitForm}>

        <label >BookTitle</label><br />
        <input type="text" id="BookTitle" required placeholder='BookTitle' value={title} onChange={(e) => settitle(e.target.value)} /><br /><br />

        <label >BookPrice</label><br />
        <input type="text" id="BookPrice" required placeholder='BookPrice' value={price} onChange={(e) => setprice(e.target.value)} /><br /><br />

        <label >BookPages</label><br />
        <input type="number" id="BookPages" required placeholder='BookPages' value={pages} onChange={(e) => setpages(e.target.value)} /><br /><br />

        <label >Tag1</label><br />
        <input type="number" id="Tag1" required placeholder='Tag1' value={tag1} onChange={(e) => settag1(e.target.value)} /><br /><br />

        <label >Tag2</label><br />
        <input type="number" id="Tag2" required placeholder='Tag2' value={tag2} onChange={(e) => settag2(e.target.value)} /><br /><br />

        <label >Tag3</label><br />
        <input type="number" id="Tag3" required placeholder='Tag3' value={tag3} onChange={(e) => settag3(e.target.value)} /><br /><br />

        <label >BookDesc</label><br />
        <input type="text" id="BookDesc" required placeholder='BookDesc' maxLength={500} value={desc} onChange={(e) => setdesc(e.target.value)} /><br /><br />

        <label >BookCover</label><br />
        <input type="file" id="BookCover" required placeholder='BookCover' value={cover} onChange={(e) => setcover(e.target.value)} /><br /><br />

        <label >BookPdf</label><br />
        <input type="file" id="BookPdf" required placeholder='BookPdf' value={file} onChange={(e) => setfile(e.target.value)} /><br /><br />

        <input className="subButton" type='submit' defaultValue="Log In" />
      </form>
      <br />
      <div>
        <h3>TAG LIST</h3>
        <div className='tbl'>
          {renderList()}
        </div>
      </div>

    </div>
  )
}


export default AddPage