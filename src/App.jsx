import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Provider } from "react-redux";
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Video from './pages/Video'
import Home from './pages/Home'
import { store } from './app/store';

function App() {

  return (
    <Provider store={store}>
    
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos/:videoId' element={<Video></Video>}></Route>
      </Routes>
      <Footer></Footer>
    </Provider>

  )
}

export default App
