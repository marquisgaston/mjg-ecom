import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

class SignInForm extends Component {
    state = {  }
    render() {
        const { className } = this.props; 
        return ( 
            <form className={`${className} sign-in-form` }>
                <h1>sign in</h1>
            </form>
         );
    }
}

SignInForm = reduxForm ({
    form: 'SignInForm'
})(SignInForm);
 
export default SignInForm;