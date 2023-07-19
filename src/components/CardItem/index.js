// Write your code here.
import './index.css'

const CardItem = props => {
  const {className, stuff} = props
  const {title, description, imgUrl} = stuff
  return (
    <li className={className}>
      <div className="div">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
