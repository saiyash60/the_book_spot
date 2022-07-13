import React from "react";
import Card from "./Card";
import axios from "axios";


function App() {

    const [search, setSearch] = React.useState("");
    const [bookData, setData] = React.useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBNqbFRdcrM374nr_lwB8uxGpHuPCF65oo' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    const searchBooks = (evt) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBNqbFRdcrM374nr_lwB8uxGpHuPCF65oo' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="hContent">
                <img id="bgImg" src="./library.jpg" alt="libraryPic" />
                <div id="heading"><h1 className="mainHeading">Welcome to The Book Spot</h1></div>
                <div className="Search"><input id="bInput" type="text" placeholder="Enter the name of book"
                    value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
                    <i onClick={searchBooks} className="fa-solid fa-magnifying-glass searchIcon"></i>
                </div>
            </div>
            <div className="mainContent">
                {
                    <Card book={bookData} />
                }
            </div>
            <div className="quote">
                <h2><span>&#8220;</span>There is no friend as loyal as a book<span>&#8221;</span></h2>
            </div>
        </div>
    );
}


export default App;