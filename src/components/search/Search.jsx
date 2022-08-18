import React from 'react';
import home from './home-outline.svg';
import prof from './person-circle-outline.svg';
import chat from './chatbubble-ellipses-outline.svg';
import photo from './camera-outline.svg';
import setting from './settings-outline.svg';

import s from './Search.module.css';
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
                            <span className={s.icon}  style={{backgroundImage:`url(${prof})`}}></span>
                            <span className={s.text}>Profile</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon} style={{backgroundImage:`url(${chat})`}}></span>
                            <span className={s.text}>Messages</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon} style={{backgroundImage:`url(${photo})`}}></span>
                            <span className={s.text}>Photos</span>
                        </a>
                    </li>
                    <li className={s.active}>
                        <a href="#">
                            <span className={s.icon} style={{backgroundImage:`url(${setting})`}}></span>
                            <span className={s.text}>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Search;
