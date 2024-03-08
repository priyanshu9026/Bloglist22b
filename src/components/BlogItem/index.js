// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blogitem-container">
      <div className="blogitem">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description} </p>
    </li>
  )
}
export default BlogItem
