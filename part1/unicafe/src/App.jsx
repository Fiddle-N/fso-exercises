import { useState } from 'react'

const Button = ({type, onClick}) => (
    <button onClick={onClick}>{type}</button>
)

const Feedback = ({feedback}) => (
    <>
        <h1>give feedback</h1>
        <div>
            <Button type='good' onClick={feedback.setGood} />
            <Button type='neutral' onClick={feedback.setNeutral} />
            <Button type='bad' onClick={feedback.setBad} />
        </div>
    </>
)

const StatisticsLine = ({type, statistic}) => (
    <p>{type} {statistic}</p>
)

const Statistics = ({statistics: {good, neutral, bad}}) => {
    const total = good + neutral + bad
    const weighted_stats = good - bad
    const average = weighted_stats / total
    const positive_percent = (good / total) * 100
    
    return (
        <>
            <h1>statistics</h1>
            <div>
                <StatisticsLine type='good' statistic={good} />
                <StatisticsLine type='neutral' statistic={neutral} />
                <StatisticsLine type='bad' statistic={bad} />
                <StatisticsLine type='all' statistic={total} />
                <StatisticsLine type='average' statistic={average} />
                <StatisticsLine type='positive' statistic={positive_percent + '%'} />
            </div>
        </>
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
        <Feedback feedback={setFeedback} />
        <Statistics statistics={feedback} />
    </div>
  )
}

export default App
