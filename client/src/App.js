import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Workers from './components/workers/Workers';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/:commentId/comments' element={<Comments />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;