import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './components/posts/Posts'
import SinglePost from './components/posts/SinglePost'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
