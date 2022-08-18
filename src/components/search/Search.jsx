import React from 'react';
import home from './home-outline.svg'
import s from './Search.module.css'
const Search = () => {
    return (
        <div className={s.main_container}>
            <div className={s.box}>
                <ul className={s.navigation}>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon} style={{backgroundImage:`url(${home})`}}></span>
                            <span className={s.text}>Home</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon}></span>
                            <span className={s.text}>Profile</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon}></span>
                            <span className={s.text}>Messages</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon}></span>
                            <span className={s.text}>Photos</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon}></span>
                            <span className={s.text}>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Search;
