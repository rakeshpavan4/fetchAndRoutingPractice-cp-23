// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {Blogdata} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = Blogdata
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="BlogItemContainer">
        <div>
          <img src={imageUrl} alt={`titl${id}`} className="BlogImage" />
        </div>
        <div className="title-topic">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar">
            <img
              src={avatarUrl}
              alt={`avatarUrl${id}`}
              className="avatarimage"
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
