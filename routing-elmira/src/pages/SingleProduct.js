import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function SingleProduct (){
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res));

    }, [productId])

    console.log(product, '', productId);

    return (
        <div>
            <h1>{product?.title}</h1>
        </div>
    );
}

export default SingleProduct;