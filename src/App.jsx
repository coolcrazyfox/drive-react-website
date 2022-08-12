import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './components/luxury/Luxury'
import Footer from './components/footer/Footer'
import Loading from "./components/preloader/Loading";


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
            <Hero/>
            <Find/>
            <Driver/>
            <Luxury/>
            <Footer/>
        </div>
    );
}

export default App;
