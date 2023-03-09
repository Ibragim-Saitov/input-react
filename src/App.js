
import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Html',
      done: false
    }, 
    {
      text: 'Scss',
      done: false
    },
    {
      text: 'React',
      done: false
    },
  ])

  const [text, setText] = useState('')

  function handlerChange(e){
    setText(e.target.value)
  }
  


  function handlerBtn(){
    setTodos([
      {
        text: text
      },
      ...todos
    ])
    setText('')
  }


return (
   <div>
    <div>
      <input type='text' value={text} onChange={handlerChange}/>
      <button onClick={handlerBtn}>add</button>
    </div>
    {
      todos.map((item, idx) =>{
      return(
        <div>
      <li key={idx}>
        {item.text}
      </li>
      <input type='checkbox' checked={item.done}/>
      </div>
      )
      })
    }
   </div>
);
}

export default App;
