import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React from 'react';

import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        {/* image, set above, and the span is the total in the cart that will be updated with Redux */}
        <span className='item-count'>{itemCount}</span> 
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);