import React from 'react';
import Footer from './../footer/footer';
import { Helmet } from 'react-helmet';

const Authpage = () => {
    return (


        <div className="home_contact">
            <Helmet>
                <title>Register | Login</title>
                <meta name="description" content="R-Shopping" />
            </Helmet>
            <div className="home_container">
                <div className="home_reg">
                    <div className="home_container">
                        <div className="home_background" style={{ backgroundImage: "url(images/contact.jpg)" }}></div>
                        <div className="home_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_content">
                                            <div className="breadcrumbs">
                                                <ul>
                                                    <li><a href="/">Home</a></li>
                                                    <li>Register | Login</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="super_container sign-in-up">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <br />

                            <div className="text-center">
                                <div className="btn-group">
                                    <a href="#new" role="tab" data-toggle="tab" className="big btn btn-primary"><i className="fa fa-plus"></i> Create Account</a>
                                    &nbsp;&nbsp;&nbsp;
<a href="#user" role="tab" data-toggle="tab" className="big btn btn-info"><i className="fa fa-user"></i> Login</a>
                                </div>
                            </div>
                            {/* <p className="click2select">Click to select</p> */}
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="new">
                                    <br />
                                    <fieldset>
                                        <div className="form-group">
                                            <div className="right-inner-addon">
                                                <i className="fa fa-envelope"></i>
                                                <input className="form-control input-lg" placeholder="email" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="right-inner-addon">
                                                <i className="fa fa-key"></i>
                                                <input className="form-control input-lg" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="right-inner-addon">
                                                <i className="fa fa-key"></i>
                                                <input className="form-control input-lg" placeholder="Confirm Password" id="" type="password" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr />
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active text-center" id="pp">
                                            <button className="btn btn-primary btn-lg btn-block"><i className="fa fa-plus"></i> Create Account</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="user">
                                    <br />
                                    <fieldset>
                                        <div className="form-group">
                                            <div className="right-inner-addon">
                                                <i className="fa fa-envelope"></i>
                                                <input className="form-control input-lg" placeholder="email" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="right-inner-addon">
                                                <i className="fa fa-key"></i>
                                                <input className="form-control input-lg" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <br />
                                    <div className=" text-center">
                                        <button className="btn btn-info btn-info"><i className="fa fa-user"></i> LOGIN</button>
                                        &nbsp;
<button className="btn btn-danger btn-danger"><i className="fa fa-google"></i> Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </div >

    );
};

export default Authpage;