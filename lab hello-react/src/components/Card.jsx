function Card(props) {
  return (
    <div className="card">
      <img src={props.icon} className="icon" alt="icon"></img>
      <h2> {props.text}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
