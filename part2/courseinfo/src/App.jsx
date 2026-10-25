const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({part: {name, exercises}}) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({parts}) => (
  <div>
    {parts.map(part => 
      <Part 
        key={part.id} 
        part={part}
      />
    )}
  </div>
)

const Total = ({parts}) => (
  <p><strong>total of {
    parts.map(
      part => part.exercises
    ).reduce(
      (acc, curr) => acc + curr)
  } exercises</strong></p>
)

const Course = ({course: {name, parts}}) => (
  <div>
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  </div>
)


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(
        course => <Course key={course.id} course={course}/>
      )}
    </div>
  )
}
export default App
