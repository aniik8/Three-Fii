import React from 'react';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Route, Switch, NavLink, useHistory} from "react-router-dom";

const Home = () => {
    return(
        <>
        <h4>Hey i'm here on Home page</h4>
        </>)
}

const Introduction = () => {
    const name = useHistory();

    console.log(name);

    return(<><h4>Hello friends my name is Aniket sharma {}</h4></>)
}
const About = () => {
    return(<><p>Hey this is about page :-)</p>
    </>)
}
const ItemComponent = () => {

    return (
        <>
            <NavLink to="/" style={{textAlign:'center'}} >Home</NavLink>
            <NavLink to="/Introduction" style={{textAlign:'center', marginLeft:"50px"}} >Intro</NavLink>
            <NavLink to="/About" style={{textAlign:'center', marginLeft:"50px"}} >About</NavLink>
            {

                <Switch>
                    <Route component={Home} path="/" exact/>
                    <Route component={Introduction} path="/Introduction" exact/>
                    <Route component={About} path="/About" exact/>
                    <Route component={Error}/>
                </Switch>
            }
        </>
    )
}

export default ItemComponent;
