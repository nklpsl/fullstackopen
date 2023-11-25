import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  )
}


const Display = ({count, text}) => {
  return (
    <>
      <p>{text} {count}</p>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Display count={good} text="good" />
      <Display count={neutral} text="neutral" />
      <Display count={bad} text="bad" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const clickGood = () => {setGood(good + 1)}
  const clickNeutral = () => {setNeutral(neutral + 1)}
  const clickBad = () => {setBad(bad + 1)}

  return (
    <div>
      <h2>give feedback</h2>
      <Button clickHandler={clickGood} text="good" />
      <Button clickHandler={clickNeutral} text="neutral" />
      <Button clickHandler={clickBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App