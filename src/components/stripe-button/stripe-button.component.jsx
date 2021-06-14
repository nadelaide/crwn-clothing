import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe wants everthing in cents -500 = 5.00
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J20scAbZYMogsXxe4V8wZ2JHX3RzAzE3e20zfeTh3tanJ6NnFVi1Yj416j0JL799ZnUmxoCOPYRPF7UlWASoI8Y00erEsnGjV';

    const onToken =  token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;