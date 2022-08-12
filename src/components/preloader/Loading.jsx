import React from 'react';
import preload from './wheel-spinner-svgrepo-com.svg';
import s from './Loading.module.css'

const Loading = () => {
    return (
        <div>
            <img className={s.imgSpinner} src={preload} alt={'pic'}/>
            <h2 style={{
                display:'flex',
                justifyContent:'center',
                paddingTop:'15px'
            }}>Loading...</h2>
        </div>
    );
};

export default Loading;
