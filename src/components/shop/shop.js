import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();

        // set header and navbar links
          // fetch navbar links
        // filter products
    }

    render() { 
        return ( 
            <div className='shop'>
                <h1>Shop</h1>
                {/* shiop search bar */}
                {/* shop products */}
                {/* shop cart button */}
            </div>
         );
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);
 
export default Shop;