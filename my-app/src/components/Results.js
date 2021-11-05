import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from 'react-redux';

function BookList(props) {
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
        let checkedIsbns = [];
        for(var i=0;i<checkBoxes.length;i++){
            if(checkBoxes[i].checked){
                checkedIsbns.push(checkBoxes[i].value);
            }
        }
        console.log(checkedIsbns);
        dispatch({type:'CHECK_OUT',isbns:checkedIsbns})
    }
    return (
        <div className="container">
            <table className="table" style={{marginLeft:'5em'}}>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Isbn</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Description</th>
                    </tr>
                </thead>
                {
                    bookData.map((book,index)=>(
                        <tr>
                            <td><input type="checkbox" value={book.isbn}/></td>
                            <td>{book.isbn}</td>
                            <td>{book.book_name}</td>
                            <td>{book.author_name}</td>
                            <td>{book.description}</td>
                        </tr>
                    ))
                }
            </table>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default BookList;