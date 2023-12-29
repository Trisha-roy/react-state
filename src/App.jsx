
import './App.css'
import Counter from './components/Counter'

function App() {

  function handleClick(){
    alert("Opps")
  }
  const addToFive=(num)=>{
    alert(num+5)
  }


  return (
    <>
      
        <h2>React Core Concepts</h2>
        <Counter></Counter>
        <p></p>
        <button onClick={handleClick}>Click Me!!</button>
        <button onClick={()=>{addToFive(3)}}>Add to Five</button>
       
    </>
  )
}

export default App
