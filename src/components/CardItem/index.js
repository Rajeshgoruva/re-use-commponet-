// Write your code here.
import './index.css'

const Banner = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={`container ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph ">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default Banner
