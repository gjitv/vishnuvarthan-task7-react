import React from 'react'
const Home = (props) => {

    const eventType=(a)=>{
        alert(a.type)
    }
  return (
    <>
        <h1> This is the home page</h1>
        <h1>{props.name}</h1>
        <button onClick={(event)=>eventType(event)}>click to find the event</button>
    </>
    
  )
}

export default Home