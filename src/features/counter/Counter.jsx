import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
       
        
        <button
        className="btn btn-error"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="bg-blue-700 box-content">{count}</span>
        <button
        className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}