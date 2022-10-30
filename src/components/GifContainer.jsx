import React from "react";
import './GifContainer.css'


export default function GifContainer({dataImg, dataText}){


    return(<>
    <div id="imagegiphy" style={{
    backgroundImage:`url(${dataImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>

    </div></>

    )
}