import React from 'react'
import { useParams } from 'react-router-dom'
import array from './b2b-products';

const SingleB2B = () => {
    const { id } = useParams<{ id: any }>();

    return (
        <div>{array[id].title}</div>
    )
}

export default SingleB2B