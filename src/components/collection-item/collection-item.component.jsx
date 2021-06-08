import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl} = item; //we want these values but need access to the item itself
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to cart</CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) //when function is called, will receive item as property, pass it into additem action creator
                                        // dispatch new object into store which goes through redux
})

export default connect(null, mapDispatchToProps)(CollectionItem);