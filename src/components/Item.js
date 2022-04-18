import React from 'react';


import '../App.css';

function Item(props) {
    return (
            <div className='boxitem'>

                <img src={props.img} alt="" className=""/>
                <h2 className='name'>{props.name}</h2>
                <p className='description'>

                    {props.desc}
                </p>

                <p className='Price_menu'>
               {props.price} $
                </p>


            
        </div>
    );
}

export default Item;