import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, desc, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
    if (!cartItems) return <div>Loading...</div>;

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img src={url + "/images/" + image} alt="" className="food-item-image" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-ratting">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{desc}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem