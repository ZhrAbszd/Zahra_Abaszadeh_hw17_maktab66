import React from 'react';
const Item = (props) => {
  return (
        <>
        {props.checked?
        <div className='item'>
            <input
            id={props.id}
            type="checkbox"
            item={props.item}
            onChange={props.handleCheck}
            />
            <label className='selected' htmlFor={props.id}>{props.item}</label>
        </div>
        : <div className='item'>
            <label>{props.item}</label>
        </div>}
        </>
  )
}

export default Item;

