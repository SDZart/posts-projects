import { useDispatch, useSelector } from 'react-redux'
import { selectLikeFilter, setLikeFilter } from '../../redux/filterSlice'

export default function Filter() {
  const dispatch = useDispatch()
  const likeFilter = useSelector(selectLikeFilter)

  const handleLikeChange = () => {
    dispatch(setLikeFilter())
  }
  return (
    <div className="filter">
      <label>
        <input
          type="checkbox"
          checked={likeFilter}
          onChange={handleLikeChange}
        />
        Favorite posts
      </label>
    </div>
  )
}
