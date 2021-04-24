import React from 'react';
import {Link}  from 'react-router-dom';

function HomePage(){
return(
    <div className="jumbotron">
        <h1>Home</h1>
        <p>React flux</p>
        <Link to ={"/about"} className="btn btn-primary">About</Link>
    </div>
);
}

export default HomePage;