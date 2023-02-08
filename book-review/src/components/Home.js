import { React, useState } from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import Cards from './Cards'
import axios from 'axios';

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    if(event.key === "Enter"){
      axios.get("https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBOAmB3ZbAJ3wj298lHk59krlO1GuX74ME")
      .then(res => setData(res.data.items))
      .catch(err => console.log(err));

    }
  }
  return (
    <>
      <Header />
      <div className="container">
        {/* <div className="my-4">{props.name ? `Welcome ${props.name}` : "Please Sign In"}
        </div> */}
        <div className="">
          <h1 className="d-flex justify-content-center align-items-center">
            A room without books is a room without soul!
          </h1>
          <div>
            <h2 className="d-flex justify-content-center align-items-center">
              Find your Book
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <Button type="button" className="m-2">
              <BiSearchAlt className="" />
              </Button>
            <input className="rounded" type="text" placeholder="Enter your book name"
            value={search} onChange={e => setSearch(e.target.value)} 
            onKeyPress={searchBook} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Cards book={bookData} />
      </div>
    </>
  )
}

export default Home