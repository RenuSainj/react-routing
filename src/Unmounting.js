import React from 'react';
 import './UnmountStyle.css';

const Unmounting = ()=>{

return(

    <div className=" UnmountStyle">
      <h1> Welcome to Unmounting Page </h1>
      <div className="container1">

        <h1>Unmounting</h1>
        <p>
        The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()
<h1>componentWillUnmount</h1>
<p>The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>
        </p>
      </div>

    </div>
)

}
export default Unmounting;