import React from 'react';


const Product = ({ title, imageUrl, price, size }) => {
    return (
        <figure className={`${size} product snip0016`}>
            <div className="product_img"><img src={imageUrl} alt={title} /></div>
            <figcaption>
                <h3>{title}</h3>
                <h3>${price}</h3>
                <a href="/"><div className="bg-3">Add to cart</div></a>
            </figcaption>
        </figure>
    )
}
export default Product;