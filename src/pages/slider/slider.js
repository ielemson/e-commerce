import React from 'react'

const Slider = () => {

    return (
        <div className="home">
            <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                    <div className="owl-item home_slider_item">
                        <div className="home_slider_background" style={{ backgroundImage: "url(images/home_slider_1.jpg)" }}></div>
                        <div className="home_slider_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div className="home_slider_title">A new Online Shop experience.</div>
                                            <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div className="button button_light home_button"><a href="/">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item home_slider_item">
                        <div className="home_slider_background" style={{ backgroundImage: "url(images/home_slider_1.jpg)" }}></div>
                        <div className="home_slider_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div className="home_slider_title">A new Online Shop experience.</div>
                                            <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div className="button button_light home_button"><a href="/">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item home_slider_item">
                        <div className="home_slider_background" style={{ backgroundImage: "url(images/home_slider_1.jpg)" }}></div>
                        <div className="home_slider_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div className="home_slider_title">A new Online Shop experience.</div>
                                            <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div className="button button_light home_button"><a href="/">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home_slider_dots_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_slider_dots">
                                    <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                                        <li className="home_slider_custom_dot active">01.</li>
                                        <li className="home_slider_custom_dot">02.</li>
                                        <li className="home_slider_custom_dot">03.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;