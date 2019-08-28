import React from 'react';
const FormInput = ({ handleChange, lable, type, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-control input-lg" onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormInput;