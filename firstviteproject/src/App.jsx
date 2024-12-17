import { useState } from 'react'

function App() {
// let counter = 10;

let [counter, setcounter] = useState(10);

const btn = document.querySelectorAll("button");

let add = ()=>{
  if(counter < 20){
    btn[1].disabled = false;
   
    counter = counter+1;
  setcounter(counter);
  console.log(counter);

  }
  else{
    
    btn[0].disabled = true;
    
  }
  }

  let minus = ()=>{
    if(counter > 0 ){
       btn[0].disabled = false;
      counter --;
      setcounter(counter);

    }
    else{
      btn[1].disabled = true;
    }
  }


  return (
    <>

    <h1>Counter : {counter}</h1>
    <button onClick={add}>Add</button>
    <button onClick= {minus}>Minus</button>
    <footer>Here Your Counter is {counter}</footer>
    </>
  )
}

export default App
