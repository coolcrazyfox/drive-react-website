import React from 'react';
import preload from './spinner.svg';

const Loading = () => {
    return (
        <div>
            <img style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '30vh'
            }} src={preload} alt={'pic'}/>
        </div>
    );
};

export default Loading;
