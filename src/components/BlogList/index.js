// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {BlogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const UpdatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({BlogsList: UpdatedData, isLoading: false})
  }

  render() {
    const {BlogsList, isLoading} = this.state

    return (
      <div className="BlogContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          BlogsList.map(each => <BlogItem Blogdata={each} key={each.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
