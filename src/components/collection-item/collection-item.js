import React from 'react';

const Collection_item = ({ imageUrl, title, name, price }) => {
    return (
        <figure className="product snip0016">
            <div className="product_img"><img src={imageUrl} alt={title} /></div>
            <figcaption>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <a href="/"><div className="bg-3">Add to cart</div></a>
            </figcaption>
        </figure>
    );
};

export default Collection_item;