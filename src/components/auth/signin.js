import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import SignInForm from "./signinForm";

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sign-in">
                <SignInForm className="sign-in__form" />
            </div>
         );
    }
}
 
export default SignIn;