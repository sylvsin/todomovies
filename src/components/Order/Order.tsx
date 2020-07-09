import React from 'react';
import { useParams } from 'react-router-dom';

function Order() {
    let { id } = useParams();

    return (
        <div className="details">
            Order works: {id}
        </div>
    );
}
export default Order