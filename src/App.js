import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
