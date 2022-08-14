import React from 'react'
// import {useDispatch, useSelector} from 'react-redux';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './components/luxury/Luxury'
import Footer from './components/footer/Footer'
// import Loading from "./components/preloader/Loading";
import Login from "./components/login/Login";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/signup/Signup";
import LearnMore from "./components/learnmore/LearnMore";


function App() {
    // const dispatch =useDispatch()
    // // const isInitialize = useSelector<AppStoreType, boolean>(state => state.app.isInitialize)
    //
    // useEffect(() => {
    //     dispatch(authMeTC())
    // },[dispatch])
    //
    // if (!isInitialize) {
    //     return <Loading/>
    // }

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={'/learnmore'} element={<LearnMore/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
            </Routes>
            <Hero/>
            <Find/>
            <Driver/>
            <Luxury/>
            <Footer/>
            {/*<Login/>*/}
        </div>
    );
}

export default App;
