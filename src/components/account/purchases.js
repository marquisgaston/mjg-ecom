import React, { Component } from 'react';

class Purchases extends Component {
    render() { 
        const { className } = this.props;
        return ( 
            <div className={`${className} purchases`}>
                <h1>Purchases go here</h1>
            </div>
         );
    }
}
 
export default Purchases;