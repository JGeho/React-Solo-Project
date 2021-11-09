import React from 'react';
import {useSelector} from 'react-redux';

function Saved(props) {
    const selectedBooks = useSelector((state)=>state.checkedOutBooks);
    console.log(selectedBooks);
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
            {
                selectedBooks.map((savedBook, index)=>(
                    <tr key={index}>
                        <td>{savedBook.isbn}</td>
                        <td>{savedBook.book_name}</td>
                        <td>{savedBook.author_name}</td>
                        <td>{savedBook.description}</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    );
}

export default Saved;