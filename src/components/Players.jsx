import React from 'react'

const allPlayers= ["ms dhoni", "Suresh Raina","Virat Kohli","Steve Smith"]
const Players = () => {

  return (
    <>
        <h1> This is the Players page</h1>
        <h1>List of Cricketers</h1>
        <ul>
            {allPlayers.map((a)=>{
                return <li key={a}>I am {a}</li>
            })}
        </ul>
    </>
  )
}

export default Players