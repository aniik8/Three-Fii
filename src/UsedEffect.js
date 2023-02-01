import React from 'react';
import {NavLink} from 'react-router-dom'
//import {useParams, useLocation} from "react-router-dom";

//import {useParams} from "react-router";


//node_modules/react-router/esm/react-router.js

const UsedEffect = () => {
const CssForNav = {
    display :'flex',
    backgroundColor:'#3a70c1',

    height: '10vh',
    justifyContent:'space-around'
}
const CssForNavLink =
    {marginRight : '10px', textDecoration:'None', color:'#fff', marginTop:'20px'};

    return(
        <>
        <div style={CssForNav}>
        <h4 style={{fontFamily:'sans-serif', marginTop:'20px', color:'#fff' }}>Covid tracker</h4>
        <NavLink to='/about' style={CssForNavLink}>About </NavLink>
        <NavLink to='/test' exact style={CssForNavLink}>Test </NavLink>
        <NavLink to='/' exact style={CssForNavLink}>Main </NavLink>
        </div>
        </>
    )
}

export default UsedEffect;