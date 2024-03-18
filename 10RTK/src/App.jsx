
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './features/counter/counterSlice'

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();

  return (
    <>
     <div>Count:{count}</div>
     <button onClick={()=>dispatch(decrement(2))} className='w-24 bg-slate-200 m-3'>-</button>
     <button onClick={()=>dispatch(increment(5))} className='w-24 bg-slate-200'>+</button>

    </>
  )
}

export default App
