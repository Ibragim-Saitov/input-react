import { useState } from "react";

function Checkbox() {
  
    const [check, setChect] = useState(true)

    function handlerChange() {
        setChect(!check)
        
    }


  return(
    <div>
     <input type='checkbox' checked={check} onChange={handlerChange}/>
    </div>
  )  
}
export default Checkbox;