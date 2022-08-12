import React from 'react';
import './style.scss'

const Container = ({children}) => {

    return (
       <div id='container'>
        {children}
       </div>
    );
};

export default Container;