import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <ParentComponent/>
    </>
  )
}




const ParentComponent = () => {

  const [savings, setSavings] = useState(2500);
  const moneyNeeded = 80;

  return (
    <>
      Parents savings: {savings} $
      <br/>
      <br/>
      Money needed for toy: {moneyNeeded} $
      <br/>
      <br/>
      <ChildComponent savings={savings} moneyNeeded={moneyNeeded} setSavings={setSavings}/>
      
    </>
  )
}


const ChildComponent = (props) => {

  const [childMoney, setChildMoney] = useState(0);
  const [numberOfToys, setNumberOfToys] = useState(0);

  const askForMoney = () => {
    
    if (props.savings >= props.moneyNeeded) {
    props.setSavings(props.savings - props.moneyNeeded);
    setChildMoney(childMoney + props.moneyNeeded);
    }
  }
  
  const buyToy = () => {

    if (childMoney >= props.moneyNeeded) {
      setChildMoney(childMoney - props.moneyNeeded);
      setNumberOfToys(numberOfToys + 1);
    }
  }

  return (
    <>
      Child's money: {childMoney} $
      <br/>
      Number of toys: {numberOfToys}
      <br/>
      
      <br/>  
      <button onClick={askForMoney}>Ask for money</button>
      <br/>
      <button onClick={buyToy}>Buy toy</button>
    </>
  )
}

export default App