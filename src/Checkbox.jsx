import { useState } from "react";

function Checkbox() {
  
    const [check, setCheck] = useState(true)

    function handlerCheck() {
        setCheck(!check)
    }


  return(
    <div handlerCheck={handlerCheck}>
     <input type='checkbox' checked={check} onChange={handlerCheck}/>
    </div>
  )  
}


export default Checkbox;