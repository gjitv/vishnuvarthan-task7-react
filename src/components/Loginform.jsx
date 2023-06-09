import React from 'react'
import { useState } from 'react'

const Loginform = () => {
const [details, setDetails]= useState({
    name:"",
    email:"",
    password:"",
    address:""
})

const handleChange=(e)=>{
    const{name, value}= e.target;
    setDetails((prev)=>{
        return{...prev,[name]:value}
    })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(details)
}

  return (
    <div>
        <h1> This is the Login Form page</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter your name <input type='text' name='name' onChange={handleChange}/></label><br/>        
            <label>Enter your Email <input type='email' name='email'  onChange={handleChange}/></label> <br/>
            <label>Enter your Password<input type='password' name='password'  onChange={handleChange}/></label><br/>
            <label>Address <textarea name='address' onChange={handleChange}></textarea></label><br/>
            <button type='submit'>Submit</button> 
        </form>
    </div>
  )
}

export default Loginform