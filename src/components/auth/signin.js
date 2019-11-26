import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sign-in">
                <h1>sign in</h1>
            </div>
         );
    }
}

SignIn = reduxForm ({
    form: 'SignIn'
})(SignIn);
 
export default SignIn;