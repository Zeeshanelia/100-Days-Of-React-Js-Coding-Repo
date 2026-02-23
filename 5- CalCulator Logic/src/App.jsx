import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./App.module.css"
import Display from '../component/Display'
import ButtonContainer from '../component/ButtonContainer'
import { useState } from 'react'
function App() {
  const [calValue, setcalValue] = useState('')

  const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
      setcalValue('');
    } else if (buttonText === '=') {
      const Result = eval(calValue)
      setcalValue(Result)
    } else {
      const newDisplay = calValue + buttonText;
      setcalValue(newDisplay)
    }
  }

  
  return (
    <div className={styles.Calculator}>
      <Display displayValue={calValue} />
      <ButtonContainer onButtonClick={onButtonClick}/> </div>
  )
}

export default App
