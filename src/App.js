import React from 'react'
import { incNumber, decNumber } from './actions/index'
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  // dispatch is a hook
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <h1>Redux Example</h1>
        <p>
          This is a simple redux example using actions, reducers,store and
          dispatcher
        </p>
      </div>
      <div>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input type='text' value={myState} />
        <button
          onClick={() => {
            dispatch(incNumber())
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App
