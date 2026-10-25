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

export default Course
