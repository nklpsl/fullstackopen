import { useState } from 'react'

const Button = ({clickHandler, text}) => {
  return (
    <>
    <button onClick={clickHandler}>
      {text}
    </button>
    </>
  )
}


const StatisticLine = ({count, text}) => {
  return (
    <>
    <tr>
      <td>
        {text}
      </td>
      <td>
        {count}
      </td>
    </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  
  let totalCount = good + neutral + bad
  let avgCount = (good - bad) / totalCount
  let positiveRatio = `${good / totalCount * 100} %`
  if (totalCount == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine count={good} text="good" />
          <StatisticLine count={neutral} text="neutral" />
          <StatisticLine count={bad} text="bad" />
          <StatisticLine count={totalCount} text="all" />
          <StatisticLine count={avgCount} text="average" />
          <StatisticLine count={positiveRatio} text="positive" />
          </tbody>
      </table>
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
