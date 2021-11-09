import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from 'react-redux';

function Results(props) {
    const [bookData,setBookData] = useState([]);
    const dispatch = useDispatch();

    const fetchBooks = () =>{
        return axios.get("https://mocki.io/v1/7be8eb26-eb72-4ddb-9925-80d157ed2252")
        .then(books=>books.data);
    }

    useEffect(()=>{
        fetchBooks().then(bookResponse=>{
            setBookData(bookResponse['books']);
        })
    },[])

    const handleCheckout = () =>{
        const checkBoxes = document.querySelectorAll("input[type=checkbox]");
        for(let index=0; index<checkBoxes.length; index++){
            if(checkBoxes[index].checked){
                let selectedBooks = bookData.filter(function(book) {
                    return book.isbn === checkBoxes[index].value})
                    selectedBooks.map((selectedBook)=>{
                        return dispatch({type:'CHECK_OUT',isbns:selectedBook})
                    })

            }
        }
    }
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>ISBN</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bookData.map((book,index)=>(
                        <tr key={index}>
                            <td><input type="checkbox" value={book.isbn}/></td>
                            <td>{book.isbn}</td>
                            <td>{book.book_name}</td>
                            <td>{book.author_name}</td>
                            <td>{book.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <button onClick={handleCheckout}>Add to Saved</button>
        </div>
    );
}

export default Results;