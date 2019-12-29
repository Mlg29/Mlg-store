import React from "react"
import StripeCheckout from "react-stripe-checkout"


function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_WFr2H6xHFUrQxFAkoLxODd3700ggtbdidK'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    
    return (
        <div>
         <StripeCheckout 
            labe='Pay Now'
            name='Mlg Store'
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
        </div>
    )
}

export default StripeCheckoutButton