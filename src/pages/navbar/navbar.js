import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <div>
            <header className="header">
                <div className="header_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo"><a href="/">R-Shopper</a></div>
                                    <nav className="main_nav">
                                        <ul>
                                            <li className="active">
                                                <a href="/">Home</a>

                                            </li>
                                            <li className="hassubs">
                                                <a href="categories.html">Categories</a>
                                                <ul>
                                                    <li><a href="categories.html">Category</a></li>
                                                    <li><a href="categories.html">Category</a></li>
                                                    <li><a href="categories.html">Category</a></li>
                                                    <li><a href="categories.html">Category</a></li>
                                                    <li><a href="categories.html">Category</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/">Accessories</a></li>
                                            <li><a href="/">Login</a></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/">Cart(0)</Link></li>
                                        </ul>
                                    </nav>
                                    {/* <div className="header_extra ml-auto">
                                        <div className="shopping_cart">
                                            <a href="cart.html">

                                               
                                            </a>
                                        </div>
                                        <div className="search">
                                            <div className="search_icon">

                                            </div>
                                        </div>
                                        <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search_panel trans_300">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                    <form action="/">
                                        <input type="text" className="search_input" placeholder="Search" required="required" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_social">
                    <ul>
                        <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </header>

            <div className="menu menu_mm trans_300">
                <div className="menu_container menu_mm">
                    <div className="page_menu_content">
                        <div className="page_menu_search menu_mm">
                            <form action="/">
                                <input type="search" required="required" className="page_menu_search_input menu_mm" placeholder="Search for products..." />
                            </form>
                        </div>
                        <ul className="page_menu_nav menu_mm">
                            <li className="page_menu_item has-children menu_mm">
                                <a href="/">Home<i className="fa fa-angle-down"></i></a>
                                <ul className="page_menu_selection menu_mm">
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Categories<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="product.html">Product<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="cart.html">Cart<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="checkout.html">Checkout<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="/contact">Contact<i className="fa fa-angle-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="page_menu_item has-children menu_mm">
                                <a href="categories.html">Categories<i className="fa fa-angle-down"></i></a>
                                <ul className="page_menu_selection menu_mm">
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item menu_mm"><a href="categories.html">Category<i className="fa fa-angle-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="page_menu_item menu_mm"><a href="index-2.html">Accessories<i className="fa fa-angle-down"></i></a></li>
                            <li className="page_menu_item menu_mm"><a href="/">Offers<i className="fa fa-angle-down"></i></a></li>
                            <li className="page_menu_item menu_mm"><a href="/contact">Contact<i className="fa fa-angle-down"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>
                <div className="menu_social">
                    <ul>
                        <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar