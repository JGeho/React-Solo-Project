import React from 'react';
import {useSelector} from 'react-redux';

function Saved(props) {
    const selectedIsbns = useSelector((state)=>state.checkedOutBooks);

    return (
        <div>
            {
                selectedIsbns.map((isbn)=>(
                    <p>ISBN: {isbn}</p>
                ))
            }
        </div>
    );
}

export default Saved;