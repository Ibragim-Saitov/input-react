
import { useState } from 'react';
import Checkbox from './Checkbox.jsx';


function App({handlerCheck}) {


  const [todos, setTodos] = useState([
    {
      text: "Html",
      done: false
    }, 
    {
      text: "Scss",
    },
    {
      text: "React",
    },
    {
      text: "Css",
    }

  ]);

  const [text, setText] = useState("")

  function handlerChange(e){
    setText(e.target.value);
  }
  
  const [check, setCheck] = useState(false);
  function handlerChanges() {
    setCheck(!check)
  }

  function handlerBtn(done) {
    setTodos([
      {
        text: text,
        done: check,
      },
      ...todos,
    ]);
    setText("");
    setTodos(false);
  }


return (
   <div>
    <div>
      <input type='text' value={text} onChange={handlerChange}/>
      <button onClick={handlerBtn}>add</button>
      <Checkbox check={check} handlerChanges={handlerChanges}/>
    </div>
    {
      todos.map((item, idx) => {
      return(
        <div>
      <li key={idx}>
        {item.text}
      </li>
      <input type='checkbox' checked={item.done}/>
      </div>
      );
      })
    }
   </div>
);
}

export default App;
