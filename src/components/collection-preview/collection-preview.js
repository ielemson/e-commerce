import React from 'react';
import CollectionItem from './../collection-item/collection-item'
const PreviewCollection = ({ title, items }) => {
    return (
        <div className="products">
            <div className="container">
                <h1>{title}</h1>
                <div className="row">
                    <div className="col">
                        <div className="product_grid">

                            {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                                <CollectionItem key={id} {...otherItemProps} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PreviewCollection;