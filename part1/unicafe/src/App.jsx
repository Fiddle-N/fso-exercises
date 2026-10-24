import { useState } from 'react'

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const Feedback = ({feedback}) => (
    <>
        <div>
            <Button text='good' onClick={feedback.setGood} />
            <Button text='neutral' onClick={feedback.setNeutral} />
            <Button text='bad' onClick={feedback.setBad} />
        </div>
    </>
)

const StatisticsLine = ({text, value}) => (
    <tr>
        <td>{text}</td> 
        <td>{value}</td>
    </tr>
)

const Statistics = ({statistics: {good, neutral, bad}}) => {
    const total = good + neutral + bad

    if (total === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    const weighted_stats = good - bad
    const average = weighted_stats / total
    const positive_percent = (good / total) * 100
    
    return (
        <table>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={total} />
            <StatisticsLine text='average' value={average} />
            <StatisticsLine text='positive' value={positive_percent + '%'} />
        </table>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackSetter = (counter, setter) => () => (
    setter(counter + 1)
  )

  const feedback = {good, neutral, bad}
  const setFeedback = {
    setGood: feedbackSetter(good, setGood), 
    setNeutral: feedbackSetter(neutral, setNeutral), 
    setBad: feedbackSetter(bad, setBad)
}

  return (
    <div>
        <h1>give feedback</h1>
        <Feedback feedback={setFeedback} />
        <h1>statistics</h1>
        <Statistics statistics={feedback} />
    </div>
  )
}

export default App
