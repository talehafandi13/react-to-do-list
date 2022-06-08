import './App.css';
import './styles/style.css'
import React from 'react'
import Input from './components/Input'
import Filters from './components/Filters'
import Tasks from './components/Tasks'
import { useSelector } from 'react-redux';


function App() {  
  const tasks = useSelector(state=>state);
  
  return (
    <div className="to-do-list">
      <Input />
      <Filters />
      <ul className="tasks">
        {tasks.length ? <Tasks /> : <h3 className="empty-header" >There is no task to show</h3>}
      </ul>
    </div>
  )
}

export default App;
