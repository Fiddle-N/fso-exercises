
import { useState } from 'react'

const Anecdote = ({anecdote, vote}) => (
  <>
    <p>
      {anecdote}
    </p>
    <p>
      has {vote} votes
    </p>
  </>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const getRandIdx = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(getRandIdx())

  const maxVote = Math.max(...votes);
  const maxVoteIdx = votes.indexOf(maxVote); 

  const setRandIdx = () => {
    const nextIdx = getRandIdx();
    setSelected(nextIdx);
  }
  const incrVotes = () => {
    const voteCopy = [...votes]
    voteCopy[selected] += 1     
    setVotes(voteCopy)
  }  

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <button onClick={incrVotes}>vote</button>
      <button onClick={setRandIdx}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[maxVoteIdx]} vote={maxVote} />
    </>
  )
}

export default App
