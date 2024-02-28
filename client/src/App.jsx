import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { LandingPage } from "./pages/LandingPage";
import { Products } from "./component/Products";
import {Footer} from "./component/Footer"
import { Beauty } from "./component/Beauty";
import { Fashion } from "./component/Fashion";
import { Sports } from "./component/Sports";
import { Digital } from "./component/Digital";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MyCart} from "./pages/MyCart"
import { useDispatch, useSelector } from "react-redux";
// import { getTotals } from "./redux/features/cartSlide";
import { useEffect } from "react";
import { Loader } from "./component/Loader";
import { NotFound } from "./component/NotFound";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { Layout } from "./component/Layout";
import { ConditionRoute } from "./component/ConditionRoute";
// import { RequireAuth } from "./component/RequireAuth";
// import { PayButton } from "./component/PayButton";
import { Hero } from "./component/Hero";
import { AccountPage } from "./pages/AccountPage";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { HomeDashboard } from "./pages/HomeDashboard";
import { AdminProducts } from "./pages/AdminProducts";
import { Orders } from "./pages/Order";
import { Categories } from "./pages/Categories";
import { AllCategory } from "./component/AllCategory";



function App() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  
  useEffect(() => {
    //   dispatch(getTotals())
    }, [cart, dispatch])

  return (
    <>
        <BrowserRouter>
            <ConditionRoute>
                <Header/>
            </ConditionRoute>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Hero/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="landPage" element ={<LandingPage/>}/>
                    {/* protected route */}
                    {/* <Route element={<RequireAuth/>}> */}
                        {/* <Route path="payBtn" element ={<PayButton/>}/> */}
                        {/* <Route path="userDetails" element = {<AccountPage/>}/> */}
                    {/* </Route> */}
                </Route>
                <Route path='category' element={<Categories/>}>
                    <Route path="all-category" element={<AllCategory/>}/>
                    <Route path="beauty" element={<Beauty/>}/>
                    <Route path="fashion" element={<Fashion/>}/>
                    <Route path="sports" element={<Sports/>}/>
                    <Route path="digital" element={<Digital/>}/>
                </Route>
                <Route path="userDetails" element = {<AccountPage/>}/>
                <Route path="mycart" element={<MyCart/>}/>
                <Route path="/checkout-success" element={<CheckoutSuccess/>}/>
                <Route path="*" element={<NotFound/>}/> 
                <Route path="register" element={<Register/>}/>
                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="home-dashboard" element={<HomeDashboard/>}/>
                    <Route path="products" element={<AdminProducts/>}/>
                    <Route path="orders" element={<Orders/>}/>
                </Route>
            </Routes>
            <ConditionRoute>
                <Footer/>
            </ConditionRoute>
        </BrowserRouter>
        <ToastContainer autoClose = {1000} />
    </>
  )
}

export default App
