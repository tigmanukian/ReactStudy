import React, {useEffect, useState} from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';

function Products (){
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const data = useLocation();

    console.log(searchParams.get("key"), 'data');

    useEffect(() => {
        let URL = "https://dummyjson.com/products/";
        if(searchParams.get("key")) {
            URL = `https://dummyjson.com/products/search?q=${searchParams.get("key")}`
        }
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                setProducts(res.products);
            });
    },[searchParams])

    const handleSearch = () => {
        let newParams = { key: inputValue };
        setSearchParams(newParams);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h1>Products</h1>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button disabled={inputValue.length < 3} onClick={handleSearch}>Search</button><br/>
            {products.map(product => <>
                <Link to={`/products/${product.id}`} key={product.id}>{product.title}</Link><br/>
            </>)}
        </div>
    );
}

export default Products;