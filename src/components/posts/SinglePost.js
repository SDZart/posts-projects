import { Link, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../redux/postSlice'

export default function SinglePost() {
  const params = useParams()
  const posts = useSelector(selectPosts)

  const post = posts.find((post) => post.id.toString() === params.id)

  return (
    <>
      <Link to="/" relative="path">
        <IoArrowBack />
        Back to all posts
      </Link>
      <h1>{post?.id}</h1>
      <h2>{post?.title}</h2>
      <h3>{post?.body}</h3>
    </>
  )
}
