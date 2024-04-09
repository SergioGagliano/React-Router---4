import { useState } from "react"

export function Counter({initialvalue}){
 const [count, setcount] = useState(initialvalue)

    return(
        <>
          <h1>{count}</h1>
          <button onClick={()=> setcount((initialvalue) => initialvalue + 1)}>Incrementa</button>
          <button onClick={()=> setcount((initialvalue) => initialvalue - 1)}>Decrementa</button>
          <button onClick={()=> setcount(initialvalue)}>Reset</button>
        </>
    )
}