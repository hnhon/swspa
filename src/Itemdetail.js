import React, { useState, useEffect } from 'react';

function Item({ match }) {

    useEffect(() => {
        fetchItem()
        console.log(match.params.id)
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch ('https://swapi.dev/api/people/' + match.params.id + '/');
        const item = await fetchItem.json();
        console.log (item);
        setItem(item);
    };
    
    return (
        <div>
            <h1>Details</h1>
            <p>
                {item.name}
            </p>
            <p>
                Height: {item.height} cm
            </p>
            <p>
                Hari Color: {item.hair_color}
            </p>
            <p>
                Birth Year: {item.birth_year}
            </p>
        </div >
    );
}

export default Item;
