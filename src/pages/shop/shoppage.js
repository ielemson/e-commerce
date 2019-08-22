import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
import Slider from './../slider/slider'
class Shoppage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                <Slider />
            </div>
        );
    }
}

export default Shoppage;