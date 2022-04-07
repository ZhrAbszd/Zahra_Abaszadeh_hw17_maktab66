import React, { useContext } from 'react'
import Item from './Item'
import { ItemContext } from '../context/context';


const Selectitems = () => {
	const { selectitems } = useContext(ItemContext);

	return (
		<div className='select'>
			<div className='select-title'>Selected Items</div>
			{selectitems.map(item => {
            return (
                <Item
                id={+(item.id)}
                item={item.item}
                checked={false}
                />
            )})}
		</div>
	)
}

export default Selectitems;