import React from 'react';


const Product = ({ title, imageUrl, price, size }) => {
    return (
        <div className={`${size} product`}>
            <div className="product_image"><img src={imageUrl} alt={title} /></div>
            <div className="product_content">
                <div className="product_title"><a href="product.html">{title}</a></div>
                <div className="product_price">${price}</div>
            </div>
        </div>
    )
}
export default Product;