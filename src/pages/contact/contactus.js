import React from 'react';
// import Navbar from './../navbar/navbar';
import Slider from './../slider/slider';
import Footer from './../footer/footer';
import { Helmet } from 'react-helmet';
const ContactUs = () => {
    return (

        <div>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Contact Us" />
            </Helmet>
            <div className="contact">
                <div className="container">


                    <div className="row">

                        <div className="col-lg-8 contact_col">
                            <div className="get_in_touch">
                                <div className="section_title">Get in Touch</div>
                                <div className="section_subtitle">Say hello</div>
                                <div className="contact_form_container">
                                    <form action="#" id="contact_form" className="contact_form">
                                        <div className="row">
                                            <div className="col-xl-6">

                                                <label htmlFor="contact_name">First Name*</label>
                                                <input type="text" id="contact_name" className="contact_input" required="required" />
                                            </div>
                                            <div className="col-xl-6 last_name_col">

                                                <label htmlFor="contact_last_name">Last Name*</label>
                                                <input type="text" id="contact_last_name" className="contact_input" required="required" />
                                            </div>
                                        </div>
                                        <div>

                                            <label htmlFor="contact_company">Subject</label>
                                            <input type="text" id="contact_company" className="contact_input" />
                                        </div>
                                        <div>
                                            <label htmlFor="contact_textarea">Message*</label>
                                            <textarea id="contact_textarea" className="contact_input contact_textarea" required="required"></textarea>
                                        </div>
                                        <button className="button contact_button"><span>Send Message</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-xl-1 contact_col">
                            <div className="contact_info">
                                <div className="contact_info_section">
                                    <div className="contact_info_title">Marketing</div>
                                    <ul>
                                        <li>Phone: <span>+53 345 7953 3245</span></li>
                                        <li>Email: <span><a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cab3a5bfb8a7aba3a68aada7aba3a6e4a9a5a7">[email&#160;protected]</a></span></li>
                                    </ul>
                                </div>
                                <div className="contact_info_section">
                                    <div className="contact_info_title">Shippiing & Returns</div>
                                    <ul>
                                        <li>Phone: <span>+53 345 7953 3245</span></li>
                                        <li>Email: <span><a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7e07110b0c131f17123e19131f1712501d1113">[email&#160;protected]</a></span></li>
                                    </ul>
                                </div>
                                <div className="contact_info_section">
                                    <div className="contact_info_title">Information</div>
                                    <ul>
                                        <li>Phone: <span>+53 345 7953 3245</span></li>
                                        <li>Email: <span><a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1861776d6a75797174587f75797174367b7775">[email&#160;protected]</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row map_row">
<div className="col">

<div className="map">
<div id="google_map" className="google_map">
<div className="map_container">
<div id="map"></div>
</div>
</div>
</div>
</div>
</div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;