import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Account/Login/Login'
import Signup from './Account/Signup/Signup'
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/NormalUser/MyOrders';
import AddReview from './Pages/Dashboard/NormalUser/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/NormalUser/Payment';
import ManageOrders from './Pages/Dashboard/Admin/ManageOrders';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import NotFound from './Shared/NotFound';
import Blogs from './Pages/Blogs';
import MyPortfolio from './Pages/MyPortfolio';
import RequireAdmin from './Shared/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='add_review' element={<AddReview></AddReview>}></Route>
          <Route path='my_profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manage_orders'   element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='manage_products' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='add_product'     element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='make_admin'      element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
