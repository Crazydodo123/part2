const Header = (props) => {
    return <h2>{props.course}</h2>
  }
  
const Total = (props) => {
  const total = props.parts.reduce((acc, el) => acc + el.exercises, 0)
    
  return <strong>total of {total} exercises</strong>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  
  return (
    <div>
      {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header key={course.id} course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default Course