import React from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    let { id } = useParams();

    return (
        <div>Details works: {id}</div>
    );
}