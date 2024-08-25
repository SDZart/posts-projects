import { Link } from 'react-router-dom'
import { RiEmotionSadLine } from 'react-icons/ri'

const NotFoundPage = () => {


  return (
    <>
      <RiEmotionSadLine />
      <div>NotFoundPage</div>
      <Link to='/' relative='path'>Go to main</Link>
    </>
  )
}

export default NotFoundPage
