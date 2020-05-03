import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Items() {

    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);
    const [id, setId] = useState ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const fetchItems = async () => {
        const data = await fetch('https://swapi.dev/api/people/');
        const dataJson = await data.json();
        console.log(dataJson.results);
        setItems(dataJson.results);
    };
    
    let i = 1;

    return (
        <div>
            {items.map((item, index) => (
                <p key={id[index]}>
                    {id[index]}
                    <Link to={'/items/' + id[index] }>{item.name}</Link>
                </p>
            ))
            };
        </div >
    );
}

export default Items;
