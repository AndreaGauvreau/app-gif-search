import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { ReactDOM } from "react";
import GifContainer from "./GifContainer";
import './GifContainer.css'


export default function SearchBar(){
    const apiKey="gsBk1DGLQzrS8aUuMmV85C1whQgHu3kr"
    const [data, setData]=useState([])
    const [search, setSearch]=useState('')
    const searchitem = useRef()
    const [number, setNumber]= useState('1')
    const searchNumber = useRef()

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=${number}`)
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
      const handleNumberChange=(e)=>{
        setNumber(searchNumber.current.value)
      }

    return(
    <>
        <h2>Cherche ton Gif Préféré</h2>
        <div id="searchBar">
            <input id='search' type='text'ref={searchitem} placeholder='Search...'/>
            <input id='submit'type='submit' onClick={handleSubmit}/>
        </div>
        <label>
            Combien de Gif afficher ?
            <select id='number' ref={searchNumber} onChange={handleNumberChange}>
                    <option value='1'>1</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                    <option value='200'>200</option>
            </select>
        </label>
        <div id="container_of_gif">
            {data.map(e=> (<GifContainer dataImg = {e.images.downsized.url} dataText={e.id}/>))}
        </div>

    </>)
}