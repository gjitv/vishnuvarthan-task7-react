import React from 'react'


const Toss = (props) => {    
    return(
            (props.name === "heads") ?
            (
                <>
                    <h1>this toss page</h1>
                    <h1>heads</h1>
                </>
           
            ) : 
            (
                <>
                    <h1>this toss page</h1>
                    <h1>Tails</h1>
                </>
            )    
    )
    
}

export default Toss;