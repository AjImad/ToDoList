import './style.scss'
import { useState } from 'react';

function App() {

  const [itemList, setList] = useState([])
  const [input, setInput] = useState('')

  const GetItems = itemList.map( (item, id) => {
    return (
      <li className='todolist--item' key={id}>
        <input type='checkbox'></input>
        <span> {item} </span>
        <button className='item--deletebtn' onClick={() => { deleteItem(id) }}>X</button>
      </li>
    )
  })
  
  const addItem = (e) => {
    e.preventDefault();
    if(input == '') return ;
    const tempList = [...itemList]
    tempList.push(input)
    setList(tempList)
    setInput('')
  }

  const deleteItem = (id) => {
    const tempList = [...itemList]
    tempList.splice(id, 1)
    setList(tempList)
  }

  return (
    <div className='todolist'>
      <h1 className='todolist--title'>My ToDoList</h1>
      <form onSubmit={addItem} className='todolist--submit'>  
        <input className='submit--input' type='text' onChange={ e => {setInput(e.target.value)}} value={input} />
        <button className='submit--btn'>Add</button>
      </form>

      <ul className='todolist--list'>
        {GetItems}
      </ul>

    </div>
  );
}

export default App;
