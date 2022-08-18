import React from 'react';
import s from './Search.module.css'
const Search = () => {
    return (
        <div>
            <ul className={s.navigation}>
                <li>
                    <a href="#">
                        <span className={s.icon_home} ></span>
                        <span className={s.text}>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={s.icon_pro}></span>
                        <span className={s.text}>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={s.icon_message}></span>
                        <span className={s.text}>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={s.icon_photo}></span>
                        <span className={s.text}>Photos</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={s.icon_set}></span>
                        <span className={s.text}>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Search;
