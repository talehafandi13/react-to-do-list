import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearAll } from '../redux/actions/actions';

const Filters = () => {

  const tasks = useSelector(state=>state);
  const dispatch = useDispatch();


  return (
    <div className="task-filter">
        <div className="task-filter-options">
            <h4 className="active">All</h4>
            <h4>Pending</h4>
            <h4>Done</h4>
        </div>
        <button type="submit" className="clear" onClick={() => dispatch(clearAll())}>Clear All</button>
    </div>
  )
}

export default Filters