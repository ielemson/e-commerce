import React, { Component } from 'react';
import ProductItem from './product-item';
// API URI
// const API = 'http://localhost:3001/products';
// const TestApi = 'https://jsonplaceholder.typicode.com/users';
class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    price: 10,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    price: 15,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    price: 60,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    price: 30,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    price: 20,
                    linkUrl: 'shop/mens'
                },
                {
                    title: 'Pets',
                    imageUrl: 'https://placeimg.com/640/480/animals',
                    size: 'large',
                    id: 6,
                    price: 5,
                    linkUrl: 'shop/kids'
                },
                {
                    title: 'Tech',
                    imageUrl: 'https://placeimg.com/640/480/tech',
                    size: 'large',
                    id: 7,
                    price: 50,
                    linkUrl: 'shop/kids'
                },
                {
                    title: 'Design',
                    imageUrl: 'https://placeimg.com/640/480/architecturegit',
                    size: 'large',
                    id: 8,
                    price: 50,
                    linkUrl: 'shop/kids'
                }
            ]


        }
    }

    // componentDidMount() {
    //     fetch(TestApi).then(response => response.json()).then((product) => {
    //         this.setState({ products: product })
    //     }).catch((err) => { console.log('Unable to fetch' + err) })
    // }
    render() {
        return (

            <div>
                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="product_grid">
                                    {this.state.products.map(({ title, id, size, imageUrl, linkUrl, price }) => (
                                        <ProductItem key={id} title={title} img={imageUrl} price={price} size={size} />
                                    ))}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Product;
