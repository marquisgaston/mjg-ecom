import React, { Component } from 'react';

class PurchaseDetail extends Component {
    render() { 
        const { className } = this.props;
        return ( 
            <div className={`${className} purchase-detail`}>
                <h1>Purchase Details go here</h1>
            </div>
         );
    }
}
 
export default PurchaseDetail;