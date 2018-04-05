import React from 'react'

const PaymentForm = (props) => {
  return (
    <div>
<form>
<label>
  Credit Card Number
  <input type="text" name="name" />
</label>
<label>
  Expiration Date
<input type="text" name="e-mail" />
</label>
<label>
  CVV
<input type="text" name="password" />
</label>
<label>
  Zip Code
<input type="text" name="password" />
</label>
</form>
<input type="submit" value="Next" onClick={props.paymentFunc}/>
    </div>
  )
}

export default PaymentForm

