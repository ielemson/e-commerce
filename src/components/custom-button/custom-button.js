import React from 'react';
const customButton = ({ children, ...otherProps }) => {
    return (

        <button  {...otherProps}> {children}</button>
    )
}

export default customButton;