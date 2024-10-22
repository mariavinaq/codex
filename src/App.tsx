import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainFeed from './pages/MainFeed/MainFeed'
import SubmitPost from './pages/SubmitPost/SubmitPost'
import SelectedPost from './pages/SelectedPost/SelectedPost'
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<MainFeed />}></Route>
            <Route path='/posts' element={<MainFeed />}></Route>
            <Route path='/posts/:id' element={<SelectedPost />}></Route>
            <Route path='/submit' element={<SubmitPost />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
