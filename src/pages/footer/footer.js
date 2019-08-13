import React from 'react';


const Footer = () => {
    return (
        <div>
            {/* <div className="avds_xl">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="avds_xl_container clearfix">
                                <div className="avds_xl_background" style={{ backgroundImage: "url(images/avds_xl.jpg)" }}></div>
                                <div className="avds_xl_content">
                                    <div className="avds_title">Amazing Devices</div>
                                    <div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
                                    <div className="avds_link avds_xl_link"><a href="categories.html">See More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="icon_boxes">
                <div className="container">
                    <div className="row icon_box_row">

                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_1.svg" alt="" /></div>
                                <div className="icon_box_title">Free Shipping Worldwide</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_2.svg" alt="" /></div>
                                <div className="icon_box_title">Free Returns</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box">
                                <div className="icon_box_image"><img src="images/icon_3.svg" alt="" /></div>
                                <div className="icon_box_title">24h Fast Support</div>
                                <div className="icon_box_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="newsletter_border"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="newsletter_content text-center">
                                <div className="newsletter_title">Subscribe to our newsletter</div>
                                <div className="newsletter_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p></div>
                                <div className="newsletter_form_container">
                                    <form action="#" id="newsletter_form" className="newsletter_form">
                                        <input type="email" className="newsletter_input" required="required" />
                                        <button className="newsletter_button trans_200"><span>Subscribe</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_overlay">

            </div>
            <footer className="footer">
                <div className="footer_background" style={{ backgroundImage: "url(images/footer.jpg)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                <div className="footer_logo"><a href="/">Sublime.</a></div>
                                <div className="copyright ml-auto mr-auto">
                                    Copyright &copy;{document.write(new Date().getFullYear())}

                                    All rights reserved | This template is made with
    <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                </div>
                                <div className="footer_social ml-lg-auto">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;