import React, { Component } from 'react';
import Forminput from './../../components/form-input/form-input'
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        //here it gets the name and email from the input field.
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="tab-pane fade" id="user">
                <br />
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <div className="right-inner-addon">
                                <i className="fa fa-envelope"></i>

                                <Forminput
                                    placeholder="email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    required />

                            </div>
                        </div>
                        <div className="form-group">
                            <div className="right-inner-addon">
                                <i className="fa fa-key"></i>
                                <Forminput
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    required />
                            </div>
                        </div>
                    </fieldset>
                    <br />
                    <div className=" text-center">
                        <button className="btn btn-info btn-info"><i className="fa fa-user"> </i>  Login with email</button>
                        &nbsp;
<button className="btn btn-danger btn-danger"><i className="fa fa-google"> </i>  Login with Google</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;