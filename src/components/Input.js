import React from 'react';

const Input = ({type, name, text}) => {

   const Tag = (type === 'textarea'? 'textarea': 'input');

   return ( 
      <div className="form__item">
            <Tag type={type} 
            name={name} 
            id={name} 
            placeholder=' '
            required
            />
            <label htmlFor={name}>
               {text}
            </label>
            <div className="form__bar" />
          </div>
    );
}
 
export default Input;