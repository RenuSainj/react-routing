import React from 'react';
import './MenuStyle.css';
import { Link } from 'react-router-dom';

const Menu = ()=>{
return(

<div className="MenuStyle">
    <h1>Component Life Cycle</h1>
   <ul>
   <li> <Link to ="/" >Mounting </Link></li>
   <li><Link to = "/Updating">Updating</Link></li>
   <li><Link to = "/Unmounting">Unmounting</Link></li>
  {/* <li>Mounting</li>
  <li>Updating</li>
  <li>Unmounting</li> */}
   </ul>


</div>

)

}
export default Menu;