import React, {useState} from 'react'

function Todo() {
 const [input, setInput] = useState();
  const [todoList, setTodoList] = useState([]);


  const addTodoItem = () => {
    const item = {
        id: 0,
        text: input,
        completed: false
    }

    setTodoList(prev => [...prev, item]);
    setInput("")
  }

  return (
    <div>
      <input type="text" placeholder='Enter Todo' 
      value={input}
       onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={()=> addTodoItem()}>Add</button>

      <ul>
        {todoList.map(t => <li key={t.id}>
          <input type="checkbox" />
          <span>{t.text}</span>
          <button>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default Todo