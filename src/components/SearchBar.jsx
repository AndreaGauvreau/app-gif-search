import React from "react";
import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import GifContainer from "./GifContainer";
import './GifContainer.css'


export default function SearchBar(){
    const apiKey="gsBk1DGLQzrS8aUuMmV85C1whQgHu3kr"
    const [data, setData]=useState([])
    const [search, setSearch]=useState('teachizi')

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`)
      .then(res => res.json())
      .then(res => setData(res.data))
      })
      
      const handleCHange=(e)=>{
        setSearch(e.target.value)
      }
      

    return(<div>

    <h2>Cherche ton Gif Préféré</h2>

    <input type='text' value={search} onChange={handleCHange}/>
    <div id="container_of_gif">
    {
    data.map(e=> (<GifContainer data = {e.images.downsized.url} />))
  }
    </div>

    </div>)
}