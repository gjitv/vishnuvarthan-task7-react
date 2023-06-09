import React from 'react'
import { useState } from 'react'
const Form = () => {

    const [name, setName]= useState("");
  return (
    <div>
        <h1> This is the Form page</h1>
        <form>
            <label>Your good name
                <input 
                type='text'
                value={name} 
                onChange={(e)=>{
                   setName(e.target.value)
                }}/>
            </label>
        </form>
    </div>
  )
}

export default Form