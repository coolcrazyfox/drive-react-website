import React from 'react'
// import {useDispatch, useSelector} from 'react-redux';
// import Loading from "./components/preloader/Loading";
import Login from "./components/login/Login";
import {Route, Routes} from "react-router-dom";
import Signup from "./components/signup/Signup";
import LearnMore from "./components/learnmore/LearnMore";
import Search from "./components/search/Search";
// import Navbar from "./components/navbar/Navbar";


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
            {/*<Navbar/>*/}
            <Routes>
                <Route path={'/'} element={<LearnMore/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/search'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
