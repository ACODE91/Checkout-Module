import React from 'react'

const AddressForm = (props) => {
  return (
<div>
<form>
<label>
  Line 1:
  <input type="text" name="line 1" />
</label>
<label>
  Line 2
<input type="text" name="line 2" />
</label>
<label>
  City
<input type="text" name="city" />
</label>
<label>
  State
<input type="text" name="state" />
</label>
<label>
  Zip Code
<input type="text" name="Zip Code" />
</label>
</form>
<input type="submit" value="submit" onClick={props.addressFunc}/>
</div>
  )
}

export default AddressForm

// import React, { Component } from 'react'

// export default class AddressForm extends Component {
//   render() {
//     return (
// <div>
// <form>
// <label>
//   Line 1:
//   <input type="text" name="line 1" />
// </label>
// <label>
//   Line 2
// <input type="text" name="line 2" />
// </label>
// <label>
//   City
// <input type="text" name="city" />
// </label>
// <label>
//   State
// <input type="text" name="state" />
// </label>
// <label>
//   Zip Code
// <input type="text" name="Zip Code" />
// </label>
// </form>
// <input type="submit" value="submit" onClick={props.addressFunc}/>
// </div>
//     )
//   }
// }
