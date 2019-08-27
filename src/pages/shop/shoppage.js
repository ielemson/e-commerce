import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
import Slider from './../slider/slider';
import Footer from './../footer/footer'
import CollectionPreview from './../../components/collection-preview/collection-preview';
import { Helmet } from 'react-helmet';
class Shoppage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="super_container">
                <Helmet>
                    <title>Shop</title>
                    <meta name="description" content="R-Shopping" />
                </Helmet>
                <Slider />
                {collections.map(({ id, ...othercollectionprops }) => (
                    <CollectionPreview key={id} {...othercollectionprops} />
                ))}

                <Footer />
            </div>
        );
    }
}

export default Shoppage;