import React from 'react';

const PreviewCollection = ({ title, items, imageUrl, price }) => {
    return (
        <div>
            <div className="products">

                <div className="container">
                    <h1>{title}</h1>
                    <div className="row">
                        <div className="col">
                            <div className="product_grid">
                                <div>
                                    {items.filter((item, idx) => idx < 4).map((item) => (
                                        <div className="product" key={item.id}>
                                            <div className="product_image"><img src={item.imageUrl} alt={item.title} /></div>
                                            <div className="product_content">
                                                <div className="product_title"><a href="product.html">{item.name}</a></div>
                                                <div className="product_price">${item.price}</div>

                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCollection;