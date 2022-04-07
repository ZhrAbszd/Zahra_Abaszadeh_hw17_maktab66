import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../context/context';
import Item from './Item';


const Allitems = () => {
    const [data, setData] = useState([]);
    const { selectItems } = useContext(ItemContext)

    useEffect(() => {
        fetch('https://61f6a7ea2e1d7e0017fd6e89.mockapi.io/post')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className='all'>
            <div className='all-title'>All Items</div>
            {data.map(item => {
            return (
                <Item 
                id={+(item.id)}
                checked={true}
                item={item.item}
                handleCheck={() => selectItems(item)}
                />
            )})}
        </div>
    )
}

export default Allitems;