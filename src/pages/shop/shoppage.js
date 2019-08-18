import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
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
                {console.log('shop page')}
            </div>
        );
    }
}

export default Shoppage;