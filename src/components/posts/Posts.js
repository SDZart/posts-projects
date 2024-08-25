import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { GoTrash } from 'react-icons/go'
import Filter from '../filter/Filter'
import { deletePost, fetchPosts, toggleLike } from '../../redux/postSlice'
import { selectPosts } from '../../redux/postSlice'
import { selectLikeFilter } from '../../redux/filterSlice'
import './Posts.css'

export default function Posts() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const isLikedFilter = useSelector(selectLikeFilter)

  const handleDownloadPosts = () => {
    dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts'))
  }

  const handlePostClick = (e, id) => {
    if (e.target.localName === 'div') {
      navigate(`post/${id}`)
    }
  }

  const handleToggleLike = (id) => {
    dispatch(toggleLike(id))
  }

  const handleDeletePost = (id) => {
    dispatch(deletePost(id))
  }

  const filteredPosts = isLikedFilter
    ? posts.filter((post) => post.isLiked === isLikedFilter)
    : posts

  return (
    <div className="container">
      {posts.length === 0 ? (
        <button
          type="button"
          onClick={handleDownloadPosts}
          className="download-btn"
        >
          Download posts
        </button>
      ) : (
        <div className="posts-container">
          <div className="posts-filter">
            <Filter />
          </div>
          <div className="posts-list">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="post"
                onClick={(e) => handlePostClick(e, post.id)}
              >
                <div className="post__id">{post.id}</div>
                <div className="post__title">
                  <div>{post.title}</div>
                </div>
                <div className="post__body">{post.body}</div>
                <div className="post__actions">
                  <span
                    onClick={() => handleToggleLike(post.id)}
                    className="post__icon-like"
                  >
                    {post.isLiked ? (
                      <MdFavorite className="icon-like-liked" />
                    ) : (
                      <MdFavoriteBorder className="icon-like" />
                    )}
                  </span>
                  <span
                    className="post__icon-delete"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <GoTrash className="trash-icon" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
