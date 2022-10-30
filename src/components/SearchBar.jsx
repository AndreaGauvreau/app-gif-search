import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { ReactDOM } from "react";
import GifContainer from "./GifContainer";
import './GifContainer.css'


export default function SearchBar(){
    const apiKey="gsBk1DGLQzrS8aUuMmV85C1whQgHu3kr"
    const [data, setData]=useState([])
    const [search, setSearch]=useState('teachizi')
    const searchitem = useRef()

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`)
      .then(res => res.json())
      .then(res => setData(res.data))
      })
      
      const handleCHange=(e)=>{
        setSearch(e.target.value)
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch(searchitem.current.value)
      }
      

    return(<>

    <h2>Cherche ton Gif Préféré</h2>

    <input type='text'ref={searchitem}/>

    <input type='submit' onClick={handleSubmit}/>
    <div id="container_of_gif">
    {
    data.map(e=> (<GifContainer dataImg = {e.images.downsized.url} dataText={e.id}/>))
  }
    </div>

    </>)
}