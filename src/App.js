import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AllUsers from './components/Dashboard/AllUsers/AllUsers';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import Home from './components/Home/Home/Home';
import Purchase from './components/Home/Tools/Purchase/Purchase';
import Login from './components/Login/Login';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='/purchase/:id' element={
          <RequireAuth><Purchase></Purchase></RequireAuth>
        }></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
