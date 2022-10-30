import React from "react";
import './GifContainer.css'


export default function GifContainer({data}){


    return(<><div id="imagegiphy" 
    style={{backgroundImage:`url(${data})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

}}></div></>

    )
}