import React from "react";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";
import { ReactDOM } from "react";
import GifContainer from "./GifContainer";
import './GifContainer.css'

const reducer=(a, b)=>{
    return{...a, ...b}
}
const apiKey="gsBk1DGLQzrS8aUuMmV85C1whQgHu3kr"


export default function SearchBar(){
    const [state, setState]=useReducer(reducer, {
        number:'1',
        search:'',
        data:[],
    })
    const searchitem = useRef()
    const searchNumber = useRef()

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${state.search}&limit=${state.number}`)
      .then(res => res.json())
      .then(res => setState({data:res.data}))
      })
      
      const handleCHange=(e)=>{
        setState({search: e.target.value})
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        setState({search:searchitem.current.value})
      }
      const handleNumberChange=(e)=>{
        setState({number: searchNumber.current.value})
      }

    return(
    <>
        <h2>Cherche ton Gif Préféré</h2>
        <div id="searchBar" onClick={()=> console.log(state.search)}>
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
            {state.data.map(e=> (<GifContainer dataImg = {e.images.downsized.url} dataText={e.id}/>))}
        </div>

    </>)
}