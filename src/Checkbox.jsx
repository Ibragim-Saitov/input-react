
function Checkbox(props) {
  return(
    <div>
     <input type='checkbox' checked={props.check} onChange={props.handlerChanges}/>
    </div>
  )  
}


export default Checkbox;