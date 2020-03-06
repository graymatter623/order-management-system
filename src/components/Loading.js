import React from 'react';
// import { connect } from 'react-redux';
import img from '../res/giphy.gif';
let Loading = ()=>(
    (
        <div style = {{textAlign : 'center'}}>
            <img src = {img} alt = "Loading..." style = {{width : "80px", height : "80px"}}/> <br/>
            <h2> Loading...</h2>
        </div>
    ) 
)
export default Loading;