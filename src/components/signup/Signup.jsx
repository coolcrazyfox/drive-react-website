import React from 'react';
import s from './Signup.module.css'
import Navbar from "../navbar/Navbar";

const Signup = () => {
    return (
        <>
            <Navbar/>
            <section>
                <div className={s.color} ></div>
                <div className={s.color}></div>
                <div className={s.color}></div>
                <div className={s.box}>
                    <div className={s.square} ></div>
                    <div className={s.square} ></div>
                    <div className={s.square} ></div>
                    <div className={s.square} ></div>
                    <div className={s.square} ></div>
                    <div className={s.container}>
                        <div className={s.form}>
                            <h2 data-text="&nbsp;Sign Up Form">&nbsp;Sign Up Form</h2>
                            <form >
                                <div className={s.inputBox}>
                                    <input type="text" placeholder={"Username"}/>
                                </div>
                                <div className={s.inputBox}>
                                    <input type="password" placeholder={"Password"}/>
                                </div>
                                <div className={s.inputBox}>
                                    <input type="submit" value={"Sign Up"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default Signup;
